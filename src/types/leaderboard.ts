export type LeaderboardEntry = {
  rank: number;
  user_id: string;
  site_username: string;
  platform_username: string;
  rating: number | null;
  updated_at: string | null;
};