import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export type LeaderboardEntry = {
  rank: number;
  user_id: string;
  site_username: string;
  platform_username: string;
  rating: number | null;
  updated_at: string | null;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get("platform");

  if (!platform || !["leetcode", "codeforces"].includes(platform)) {
    return NextResponse.json(
      { error: "platform must be 'leetcode' or 'codeforces'" },
      { status: 400 },
    );
  }

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

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const leaderboard: LeaderboardEntry[] = (data ?? []).map((entry, index) => ({
    rank: index + 1,
    user_id: entry.user_id,
    site_username:
      (entry.users as { username: string }[] | null)?.[0]?.username ?? "Unknown",
    platform_username: (entry as Record<string, unknown>)[usernameField] as string,
    rating: (entry as Record<string, unknown>)[ratingField] as number | null,
    updated_at: entry.updated_at,
  }));

  return NextResponse.json(leaderboard);
}
