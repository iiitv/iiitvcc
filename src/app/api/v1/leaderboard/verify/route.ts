import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const VERIFY_COOLDOWN_MS = 15 * 1000; // 15s between verify attempts per user

// ── LeetCode ─────────────────────────────────────────────────────────────────
async function fetchLeetCodeProfile(username: string) {
  const query = `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        profile {
          aboutMe
        }
      }
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

  if (json.errors || !json.data?.matchedUser) {
    throw new Error("LeetCode user not found");
  }

  const aboutMe: string = json.data.matchedUser.profile?.aboutMe ?? "";
  const contestData = json.data.userContestRanking;

  // null rating → "Unrated" (no contests attended)
  const rating: number | null =
    contestData && contestData.attendedContestsCount > 0
      ? Math.round(contestData.rating)
      : null;

  return { aboutMe, rating };
}

// ── Codeforces ────────────────────────────────────────────────────────────────
async function fetchCodeforcesProfile(username: string) {
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${encodeURIComponent(username)}`,
    { cache: "no-store", signal: AbortSignal.timeout(10000) },
  );

  if (!res.ok) throw new Error(`Codeforces API returned ${res.status}`);

  const json = await res.json();

  if (json.status !== "OK" || !json.result?.[0]) {
    throw new Error("Codeforces user not found");
  }

  const cfUser = json.result[0];

  // "organization" is the only publicly visible text field CF exposes
  const organization: string = cfUser.organization ?? "";

  // CF rating is absent for unrated users
  const rating: number | null = cfUser.rating ?? null;

  return { organization, rating };
}

// ── POST: Verify ──────────────────────────────────────────────────────────────
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
  const { data: profile, error: profileErr } = await supabase
    .from("coding_profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (profileErr || !profile) {
    return NextResponse.json(
      { error: "Generate a verification code first." },
      { status: 404 },
    );
  }

  const username =
    platform === "leetcode"
      ? profile.leetcode_username
      : profile.codeforces_username;
  const verifyCode =
    platform === "leetcode"
      ? profile.leetcode_verify_code
      : profile.codeforces_verify_code;

  if (!username || !verifyCode) {
    return NextResponse.json(
      { error: "Generate a verification code first." },
      { status: 400 },
    );
  }

  if (profile.updated_at) {
    const elapsed = Date.now() - new Date(profile.updated_at).getTime();
    if (elapsed < VERIFY_COOLDOWN_MS) {
      const waitSec = Math.ceil((VERIFY_COOLDOWN_MS - elapsed) / 1000);
      return NextResponse.json({
        success: false,
        error: `Please wait ${waitSec}s before trying again.`,
      });
    }
  }

  try {
    let verified = false;
    let rating: number | null = null;

    if (platform === "leetcode") {
      const lc = await fetchLeetCodeProfile(username);
      if (lc.aboutMe.includes(verifyCode)) {
        verified = true;
        rating = lc.rating;
      }
    } else {
      const cf = await fetchCodeforcesProfile(username);
      if (cf.organization.includes(verifyCode)) {
        verified = true;
        rating = cf.rating;
      }
    }

    if (!verified) {
      return NextResponse.json({
        success: false,
        error:
          platform === "leetcode"
            ? "Code not found in your LeetCode 'About Me'. Make sure you saved your profile."
            : "Code not found in your Codeforces 'Organization' field. Make sure you saved your profile.",
      });
    }

    // Persist verification
    const updateData: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };
    if (platform === "leetcode") {
      updateData.leetcode_verified = true;
      updateData.leetcode_rating = rating;
    } else {
      updateData.codeforces_verified = true;
      updateData.codeforces_rating = rating;
    }

    const { error: updateErr } = await supabase
      .from("coding_profiles")
      .update(updateData)
      .eq("user_id", user.id);

    if (updateErr) throw updateErr;

    return NextResponse.json({ success: true, rating });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Verification failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// ── DELETE: Unlink ────────────────────────────────────────────────────────────
export async function DELETE(request: NextRequest) {
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

  const clearData: Record<string, unknown> = {};
  if (platform === "leetcode") {
    clearData.leetcode_username = null;
    clearData.leetcode_verified = false;
    clearData.leetcode_verify_code = null;
    clearData.leetcode_rating = null;
  } else {
    clearData.codeforces_username = null;
    clearData.codeforces_verified = false;
    clearData.codeforces_verify_code = null;
    clearData.codeforces_rating = null;
  }
  clearData.updated_at = new Date().toISOString();

  const { error } = await supabase
    .from("coding_profiles")
    .update(clearData)
    .eq("user_id", user.id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}