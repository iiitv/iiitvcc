"use server";

import { createClient } from "@/utils/supabase/server";

type Platform = "leetcode" | "codeforces";

const REFRESH_COOLDOWN_MS = 60 * 1000; // 1 min between refreshes per user

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

export async function refreshRating(platform: Platform) {
  try {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();
    if (!data?.user) {
      console.log("User not authenticated");
      return { success: false, message: "User not authenticated" };
    }

    if (!platform || !["leetcode", "codeforces"].includes(platform)) {
      return { success: false, message: "Invalid platform" };
    }

    const { data: profile, error: fetchErr } = await supabase
      .from("coding_profiles")
      .select("*")
      .eq("user_id", data.user.id)
      .single();

    if (fetchErr || !profile) {
      return { success: false, message: "Profile not found" };
    }

    const isVerified =
      platform === "leetcode" ? profile.leetcode_verified : profile.codeforces_verified;

    const username =
      platform === "leetcode" ? profile.leetcode_username : profile.codeforces_username;

    if (!isVerified || !username) {
      return { success: false, message: "Platform not verified" };
    }

    if (profile.updated_at) {
      const elapsed = Date.now() - new Date(profile.updated_at).getTime();
      if (elapsed < REFRESH_COOLDOWN_MS) {
        const waitSec = Math.ceil((REFRESH_COOLDOWN_MS - elapsed) / 1000);
        return { success: false, message: `Please wait ${waitSec}s before refreshing again.` };
      }
    }

    const rating =
      platform === "leetcode"
        ? await fetchLeetCodeRating(username)
        : await fetchCodeforcesRating(username);

    const updateField = platform === "leetcode" ? "leetcode_rating" : "codeforces_rating";

    const { error: updateErr } = await supabase
      .from("coding_profiles")
      .update({ [updateField]: rating, updated_at: new Date().toISOString() })
      .eq("user_id", data.user.id);

    if (updateErr) {
      return { success: false, message: "Failed to update rating" };
    }

    console.log("Refreshed rating:", platform, rating);
    return { success: true, rating };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
