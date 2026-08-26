import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const REFRESH_COOLDOWN_MS = 60 * 1000; // 1 min between refreshes per user

// Helpers
async function fetchLeetCodeRating(username: string): Promise<number | null> {
  const query = `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Origin: "https://leetcode.com",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({ query, variables: { username } }),
    cache: "no-store",
    signal: AbortSignal.timeout(12000),
  });

  if (!res.ok) throw new Error(`LeetCode API returned ${res.status}`);

  const json = await res.json();
  const contestData = json.data?.userContestRanking;

  if (!contestData || contestData.attendedContestsCount === 0) return null;
  return Math.round(contestData.rating);
}

async function fetchCodeforcesRating(username: string): Promise<number | null> {
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${encodeURIComponent(username)}`,
    { cache: "no-store", signal: AbortSignal.timeout(10000) },
  );

  if (!res.ok) throw new Error(`Codeforces API returned ${res.status}`);

  const json = await res.json();
  if (json.status !== "OK" || !json.result?.[0]) return null;

  return json.result[0].rating ?? null;
}

// POST: Refresh own rating 
export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: { platform?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { platform } = body;
  if (!platform || !["leetcode", "codeforces"].includes(platform)) {
    return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
  }

  // Load stored profile
  const { data: profile } = await supabase
    .from("coding_profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!profile)
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });

  const isVerified =
    platform === "leetcode"
      ? profile.leetcode_verified
      : profile.codeforces_verified;

  const username =
    platform === "leetcode"
      ? profile.leetcode_username
      : profile.codeforces_username;

  if (!isVerified || !username) {
    return NextResponse.json(
      { error: "Platform not verified" },
      { status: 400 },
    );
  }

  if (profile.updated_at) {
    const elapsed = Date.now() - new Date(profile.updated_at).getTime();
    if (elapsed < REFRESH_COOLDOWN_MS) {
      const waitSec = Math.ceil((REFRESH_COOLDOWN_MS - elapsed) / 1000);
      return NextResponse.json(
        { error: `Please wait ${waitSec}s before refreshing again.` },
        { status: 429 },
      );
    }
  }

  try {
    const rating =
      platform === "leetcode"
        ? await fetchLeetCodeRating(username)
        : await fetchCodeforcesRating(username);

    const updateField =
      platform === "leetcode" ? "leetcode_rating" : "codeforces_rating";

    await supabase
      .from("coding_profiles")
      .update({ [updateField]: rating, updated_at: new Date().toISOString() })
      .eq("user_id", user.id);

    return NextResponse.json({ success: true, rating });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Refresh failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
