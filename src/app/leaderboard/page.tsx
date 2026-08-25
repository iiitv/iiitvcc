import { createClient } from "@/utils/supabase/server";
import LeaderboardClient from "./components/LeaderboardClient";
import type { LeaderboardEntry } from "@/app/api/v1/leaderboard/route";

async function getLeaderboard(
  platform: "leetcode" | "codeforces",
): Promise<LeaderboardEntry[]> {
  const supabase = await createClient();

  const verifiedField =
    platform === "leetcode" ? "leetcode_verified" : "codeforces_verified";
  const usernameField =
    platform === "leetcode" ? "leetcode_username" : "codeforces_username";
  const ratingField =
    platform === "leetcode" ? "leetcode_rating" : "codeforces_rating";

  const { data, error } = await supabase
    .from("coding_profiles")
    .select(
      `user_id, ${usernameField}, ${ratingField}, updated_at, users(username)`,
    )
    .eq(verifiedField, true)
    .order(ratingField, { ascending: false, nullsFirst: false });

  if (error || !data) return [];

  return data.map((entry, index) => ({
    rank: index + 1,
    user_id: entry.user_id,
    site_username:
      (entry.users as { username: string } | null)?.username ?? "Unknown",
    platform_username: (entry as Record<string, unknown>)[
      usernameField
    ] as string,
    rating: (entry as Record<string, unknown>)[ratingField] as number | null,
    updated_at: entry.updated_at,
  }));
}

export default async function LeaderboardPage() {
  const supabase = await createClient();

  // Get current logged-in user (if any) for row highlighting
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch both leaderboards in parallel
  const [leetcodeData, codeforcesData] = await Promise.all([
    getLeaderboard("leetcode"),
    getLeaderboard("codeforces"),
  ]);

  return (
    <LeaderboardClient
      leetcodeData={leetcodeData}
      codeforcesData={codeforcesData}
      currentUserId={user?.id ?? null}
    />
  );
}
