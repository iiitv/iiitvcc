"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { LeaderboardEntry } from "@/app/api/v1/leaderboard/route";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Props {
  leetcodeData: LeaderboardEntry[];
  codeforcesData: LeaderboardEntry[];
  currentUserId: string | null;
}

type Platform = "leetcode" | "codeforces";

// ── Rating tier helpers ───────────────────────────────────────────────────────
function getCFTier(rating: number | null): { label: string; color: string } {
  if (!rating) return { label: "Unrated", color: "#888" };
  if (rating >= 3000) return { label: "Legendary GM", color: "#AA0000" };
  if (rating >= 2600) return { label: "Intl. GM", color: "#FF3333" };
  if (rating >= 2400) return { label: "Grandmaster", color: "#FF7777" };
  if (rating >= 2300) return { label: "Intl. Master", color: "#FFBB55" };
  if (rating >= 2100) return { label: "Master", color: "#FFBB55" };
  if (rating >= 1900) return { label: "Candidate Master", color: "#FF88FF" };
  if (rating >= 1600) return { label: "Expert", color: "#AAAAFF" };
  if (rating >= 1400) return { label: "Specialist", color: "#77DDBB" };
  if (rating >= 1200) return { label: "Pupil", color: "#77FF77" };
  return { label: "Newbie", color: "#888" };
}

function getLCTier(rating: number | null): { label: string; color: string } {
  if (!rating) return { label: "Unrated", color: "#888" };
  if (rating >= 2200) return { label: "Guardian", color: "#FFD700" };
  if (rating >= 1850) return { label: "Knight", color: "#00C9B1" };
  return { label: "Rated", color: "#FFA116" };
}

// ── Avatar ────────────────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#BB8FCE",
  "#85C1E9", "#F0B27A", "#82E0AA", "#F1948A", "#AED6F1",
];

function hashColor(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function Avatar({ username }: { username: string }) {
  const bg = hashColor(username);
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-background flex-shrink-0 uppercase select-none"
      style={{ background: bg }}
    >
      {username.slice(0, 2)}
    </div>
  );
}

// ── Rank badge ────────────────────────────────────────────────────────────────
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="text-2xl" title="1st">
        🥇
      </span>
    );
  if (rank === 2)
    return (
      <span className="text-2xl" title="2nd">
        🥈
      </span>
    );
  if (rank === 3)
    return (
      <span className="text-2xl" title="3rd">
        🥉
      </span>
    );
  return (
    <span className="text-muted-foreground font-bold text-sm w-8 text-center tabular-nums">
      #{rank}
    </span>
  );
}

// ── Relative time ─────────────────────────────────────────────────────────────
function relativeTime(iso: string | null): string {
  if (!iso) return "never";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 2) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

// ── Platform SVG icons ────────────────────────────────────────────────────────
function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function CodeforcesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  );
}

// ── Leaderboard row ───────────────────────────────────────────────────────────
function LeaderboardRow({
  entry,
  platform,
  isCurrentUser,
  index,
}: {
  entry: LeaderboardEntry;
  platform: Platform;
  isCurrentUser: boolean;
  index: number;
}) {
  const tier =
    platform === "leetcode"
      ? getLCTier(entry.rating)
      : getCFTier(entry.rating);

  const profileUrl =
    platform === "leetcode"
      ? `https://leetcode.com/${entry.platform_username}`
      : `https://codeforces.com/profile/${entry.platform_username}`;

  return (
    <motion.div
      key={entry.user_id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.055, ease: "easeOut" }}
      className={`
        group relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200
        ${
          isCurrentUser
            ? "border-primary/60 bg-primary/5 shadow-[0_0_20px_rgba(255,186,222,0.08)]"
            : "border-border bg-secondary/40 hover:bg-secondary/70 hover:border-border/60"
        }
      `}
    >
      {/* Current-user glow pulse */}
      {isCurrentUser && (
        <span className="absolute -inset-px rounded-xl border border-primary/30 animate-pulse pointer-events-none" />
      )}

      {/* Rank */}
      <div className="w-10 flex items-center justify-center flex-shrink-0">
        <RankBadge rank={entry.rank} />
      </div>

      {/* Avatar */}
      <Avatar username={entry.site_username} />

      {/* Names */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground truncate">
            {entry.site_username}
          </span>
          {isCurrentUser && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary uppercase tracking-wider">
              You
            </span>
          )}
        </div>
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors truncate block"
        >
          @{entry.platform_username}
        </Link>
      </div>

      {/* Rating + tier */}
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        {entry.rating !== null ? (
          <>
            <span
              className="text-xl font-bold tabular-nums"
              style={{ color: tier.color }}
            >
              {entry.rating.toLocaleString()}
            </span>
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{
                color: tier.color,
                background: `${tier.color}18`,
                border: `1px solid ${tier.color}40`,
              }}
            >
              {tier.label}
            </span>
          </>
        ) : (
          <span className="text-sm text-muted-foreground italic">Unrated</span>
        )}
      </div>

      {/* Updated time — visible on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground flex-shrink-0 w-16 text-right">
        {relativeTime(entry.updated_at)}
      </div>
    </motion.div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyState({ platform }: { platform: Platform }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-24 gap-4 text-center"
    >
      <span className="text-6xl">
        {platform === "leetcode" ? "🟠" : "🔵"}
      </span>
      <h3 className="text-xl font-semibold text-foreground">
        No entries yet
      </h3>
      <p className="text-muted-foreground max-w-sm">
        Be the first from IIITV to appear on the{" "}
        {platform === "leetcode" ? "LeetCode" : "Codeforces"} leaderboard!
      </p>
      <Link
        href="/profile/account"
        className="btn-brutalist h-10 bg-transparent text-primary border-primary text-sm mt-2"
      >
        Link Your Profile
      </Link>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LeaderboardClient({
  leetcodeData,
  codeforcesData,
  currentUserId,
}: Props) {
  const [platform, setPlatform] = useState<Platform>("leetcode");
  const [search, setSearch] = useState("");

  const data = platform === "leetcode" ? leetcodeData : codeforcesData;

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (e) =>
        e.site_username.toLowerCase().includes(q) ||
        e.platform_username.toLowerCase().includes(q),
    );
  }, [data, search]);

  // Find current user's position
  const currentUserEntry = data.find((e) => e.user_id === currentUserId);

  return (
    <div className="min-h-[80dvh] bg-background py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block">🏆</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
              Club{" "}
              <span className="text-primary">Leaderboard</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Competitive programming rankings of IIITV Coding Club members.
              Ratings sync from live platform data.
            </p>
          </motion.div>

          {/* Current user's rank pill */}
          {currentUserEntry && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm"
            >
              <span className="text-primary font-semibold">Your rank:</span>
              <span className="font-bold text-foreground">
                #{currentUserEntry.rank}
              </span>
              {currentUserEntry.rating !== null && (
                <>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-foreground font-semibold">
                    {currentUserEntry.rating.toLocaleString()}
                  </span>
                </>
              )}
            </motion.div>
          )}

          {/* Link profile CTA if not on leaderboard */}
          {currentUserId && !currentUserEntry && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground"
            >
              You&apos;re not on this leaderboard yet.{" "}
              <Link
                href="/profile/account"
                className="text-primary hover:underline font-medium"
              >
                Link your profile →
              </Link>
            </motion.div>
          )}

          {!currentUserId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5"
            >
              <Link
                href="/auth"
                className="btn-brutalist h-9 bg-transparent text-primary border-primary text-sm"
              >
                Login to join the leaderboard
              </Link>
            </motion.div>
          )}
        </div>

        {/* ── Platform tabs ── */}
        <div className="relative flex bg-secondary rounded-xl p-1 mb-8 gap-1">
          {(["leetcode", "codeforces"] as Platform[]).map((p) => (
            <button
              key={p}
              onClick={() => {
                setPlatform(p);
                setSearch("");
              }}
              className={`
                relative flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg
                text-sm font-medium transition-all duration-200 z-10
                ${platform === p ? "text-background" : "text-muted-foreground hover:text-foreground"}
              `}
            >
              {/* Active tab background */}
              {platform === p && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 rounded-lg z-0"
                  style={{
                    background:
                      p === "leetcode" ? "#FFA116" : "#1F8ACB",
                  }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {p === "leetcode" ? (
                  <LeetCodeIcon className="w-4 h-4" />
                ) : (
                  <CodeforcesIcon className="w-4 h-4" />
                )}
                {p === "leetcode" ? "LeetCode" : "Codeforces"}
              </span>
              {/* Entry count badge */}
              <span
                className={`
                  relative z-10 text-[11px] font-bold px-1.5 py-0.5 rounded-full
                  ${platform === p ? "bg-black/20 text-white" : "bg-border text-muted-foreground"}
                `}
              >
                {p === "leetcode" ? leetcodeData.length : codeforcesData.length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Search ── */}
        {data.length > 0 && (
          <div className="relative mb-6">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by username..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* ── Column headers ── */}
        {data.length > 0 && (
          <div className="flex items-center gap-4 px-5 mb-2 text-xs text-muted-foreground uppercase tracking-wider">
            <span className="w-10 text-center">Rank</span>
            <span className="w-10" />
            <span className="flex-1">Member</span>
            <span className="text-right">Rating</span>
            <span className="hidden sm:block w-16 text-right">Updated</span>
          </div>
        )}

        {/* ── Rows ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={platform + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-2"
          >
            {filtered.length === 0 ? (
              search ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 text-muted-foreground"
                >
                  No members found matching &ldquo;{search}&rdquo;
                </motion.p>
              ) : (
                <EmptyState platform={platform} />
              )
            ) : (
              filtered.map((entry, index) => (
                <LeaderboardRow
                  key={entry.user_id}
                  entry={entry}
                  platform={platform}
                  isCurrentUser={entry.user_id === currentUserId}
                  index={index}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer note ── */}
        {data.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-8"
          >
            Ratings are stored from the last manual refresh. Visit your{" "}
            <Link href="/profile/account" className="text-primary hover:underline">
              account settings
            </Link>{" "}
            to refresh your rating.
          </motion.p>
        )}
      </div>
    </div>
  );
}
