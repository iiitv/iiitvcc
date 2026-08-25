"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { supabase } from "@/utils/supabase/client";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CodingProfileData {
  leetcode_username: string | null;
  leetcode_verified: boolean | null;
  leetcode_verify_code: string | null;
  leetcode_rating: number | null;
  codeforces_username: string | null;
  codeforces_verified: boolean | null;
  codeforces_verify_code: string | null;
  codeforces_rating: number | null;
  updated_at: string | null;
}

type Platform = "leetcode" | "codeforces";
type PlatformStatus = "idle" | "loading" | "success" | "error";

// ── Platform Icons ────────────────────────────────────────────────────────────
function LeetCodeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function CodeforcesIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  );
}

// ── Copy button ───────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copy}
      className="text-xs px-2 py-1 rounded border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
}

// ── Single platform section ───────────────────────────────────────────────────
interface PlatformSectionProps {
  platform: Platform;
  userId: string;
  profile: CodingProfileData | null;
  onProfileUpdate: (partial: Partial<CodingProfileData>) => void;
}

function PlatformSection({
  platform,
  userId,
  profile,
  onProfileUpdate,
}: PlatformSectionProps) {
  const isLC = platform === "leetcode";
  const color = isLC ? "#FFA116" : "#1F8ACB";
  const label = isLC ? "LeetCode" : "Codeforces";
  const hint = isLC
    ? "Add this code to your LeetCode Profile → Edit → 'About Me' field, then click Verify."
    : "Add this code to your Codeforces profile → Edit → 'Organization' field, then click Verify.";
  const profileUrl = (handle: string) =>
    isLC
      ? `https://leetcode.com/${handle}`
      : `https://codeforces.com/profile/${handle}`;

  const username = isLC ? profile?.leetcode_username : profile?.codeforces_username;
  const verified = isLC ? profile?.leetcode_verified : profile?.codeforces_verified;
  const verifyCode = isLC ? profile?.leetcode_verify_code : profile?.codeforces_verify_code;
  const rating = isLC ? profile?.leetcode_rating : profile?.codeforces_rating;

  const [input, setInput] = useState("");
  const [status, setStatus] = useState<PlatformStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await axios.post("/api/v1/leaderboard/generate-code", {
        platform,
        username: input.trim(),
      });
      onProfileUpdate(
        isLC
          ? {
              leetcode_username: input.trim(),
              leetcode_verify_code: res.data.code,
              leetcode_verified: false,
              leetcode_rating: null,
            }
          : {
              codeforces_username: input.trim(),
              codeforces_verify_code: res.data.code,
              codeforces_verified: false,
              codeforces_rating: null,
            },
      );
      setStatus("success");
      setInput("");
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.error ?? "Failed to generate code"
        : "Failed to generate code";
      setStatus("error");
      setMessage(message);
    }
  };

  const handleVerify = async () => {
    setStatus("loading");
    setMessage(null);
    try {
      const res = await axios.post("/api/v1/leaderboard/verify", { platform });
      if (res.data.success) {
        onProfileUpdate(
          isLC
            ? { leetcode_verified: true, leetcode_rating: res.data.rating }
            : {
                codeforces_verified: true,
                codeforces_rating: res.data.rating,
              },
        );
        setStatus("success");
        setMessage(
          res.data.rating !== null
            ? `Verified! Your rating: ${res.data.rating}`
            : "Verified! You appear as Unrated (no contests attended yet).",
        );
      } else {
        setStatus("error");
        setMessage(res.data.error ?? "Verification failed");
      }
    } catch {
      setStatus("error");
      setMessage("Verification failed. Please try again.");
    }
  };

  const handleRefresh = async () => {
    setStatus("loading");
    setMessage(null);
    try {
      const res = await axios.post("/api/v1/leaderboard/refresh", { platform });
      if (res.data.success) {
        onProfileUpdate(
          isLC
            ? { leetcode_rating: res.data.rating }
            : { codeforces_rating: res.data.rating },
        );
        setStatus("success");
        setMessage(
          res.data.rating !== null
            ? `Rating updated to ${res.data.rating}`
            : "Updated — still Unrated.",
        );
      } else {
        throw new Error(res.data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Could not refresh rating. Try again later.");
    }
  };

  const handleUnlink = async () => {
    if (!confirm(`Unlink your ${label} account? You'll be removed from the leaderboard.`))
      return;
    setStatus("loading");
    setMessage(null);
    try {
      await axios.delete("/api/v1/leaderboard/verify", {
        data: { platform },
      });
      onProfileUpdate(
        isLC
          ? {
              leetcode_username: null,
              leetcode_verified: false,
              leetcode_verify_code: null,
              leetcode_rating: null,
            }
          : {
              codeforces_username: null,
              codeforces_verified: false,
              codeforces_verify_code: null,
              codeforces_rating: null,
            },
      );
      setStatus("idle");
      setMessage(null);
    } catch {
      setStatus("error");
      setMessage("Could not unlink. Try again.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div
      className="rounded-xl border p-5 flex flex-col gap-4 transition-colors"
      style={{ borderColor: `${color}30` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span style={{ color }}>{isLC ? <LeetCodeIcon /> : <CodeforcesIcon />}</span>
        <span className="font-semibold text-foreground">{label}</span>
        {verified && (
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: `${color}20`, color }}>
            ✓ Verified
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* ── STATE 1: Not set up ── */}
        {!username && (
          <motion.div
            key="setup"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm text-muted-foreground">
              Link your {label} account to appear on the leaderboard.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={`${label} username`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading || !input.trim()}
                className="btn-brutalist h-9 text-sm px-4"
                style={{
                  color,
                  borderColor: color,
                  background: "transparent",
                }}
              >
                {isLoading ? "…" : "Generate Code"}
              </button>
            </div>
            {message && status === "error" && (
              <p className="text-sm text-red-400">{message}</p>
            )}
          </motion.div>
        )}

        {/* ── STATE 2: Code generated, pending verification ── */}
        {username && !verified && (
          <motion.div
            key="pending"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm text-muted-foreground">
              Verifying{" "}
              <span className="font-medium text-foreground">@{username}</span>
            </p>

            {/* Code display */}
            {verifyCode && (
              <div className="rounded-lg bg-secondary border border-border p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <code
                    className="font-mono font-bold text-base tracking-wider"
                    style={{ color }}
                  >
                    {verifyCode}
                  </code>
                  <CopyButton text={verifyCode} />
                </div>
                <p className="text-xs text-muted-foreground">{hint}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleVerify}
                disabled={isLoading}
                className="btn-brutalist h-9 text-sm"
                style={{ color, borderColor: color, background: "transparent" }}
              >
                {isLoading ? "Verifying…" : "Verify Now"}
              </button>
              <button
                onClick={() => {
                  onProfileUpdate(
                    isLC
                      ? {
                          leetcode_username: null,
                          leetcode_verify_code: null,
                          leetcode_verified: false,
                        }
                      : {
                          codeforces_username: null,
                          codeforces_verify_code: null,
                          codeforces_verified: false,
                        },
                  );
                  // Reset on the server too
                  axios.delete("/api/v1/leaderboard/verify", {
                    data: { platform },
                  });
                }}
                className="btn-brutalist h-9 text-sm bg-transparent text-muted-foreground border-border"
                disabled={isLoading}
              >
                Change Username
              </button>
            </div>

            {message && (
              <p
                className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
              >
                {message}
              </p>
            )}
          </motion.div>
        )}

        {/* ── STATE 3: Verified ── */}
        {username && verified && (
          <motion.div
            key="verified"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-3"
          >
            {/* Profile link */}
            <a
              href={profileUrl(username)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline transition-colors"
              style={{ color }}
            >
              @{username} ↗
            </a>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Contest Rating
                </span>
                <span
                  className="text-2xl font-bold tabular-nums"
                  style={{ color: rating ? color : "#888" }}
                >
                  {rating !== null && rating !== undefined
                    ? rating.toLocaleString()
                    : "Unrated"}
                </span>
              </div>
            </div>

            {message && (
              <p
                className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
              >
                {message}
              </p>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="btn-brutalist h-8 text-xs px-3"
                style={{ color, borderColor: color, background: "transparent" }}
              >
                {isLoading ? "Refreshing…" : "↻ Refresh Rating"}
              </button>
              <button
                onClick={handleUnlink}
                disabled={isLoading}
                className="btn-brutalist h-8 text-xs px-3 bg-transparent text-muted-foreground border-border"
              >
                Unlink
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CodingProfiles({ userId }: { userId: string }) {
  const [profile, setProfile] = useState<CodingProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    const { data } = await supabase
      .from("coding_profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    setProfile(data ?? null);
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const updateProfile = (partial: Partial<CodingProfileData>) => {
    setProfile((prev) =>
      prev
        ? { ...prev, ...partial }
        : ({ ...partial } as CodingProfileData),
    );
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          🏆 Coding Profiles
        </h2>
        <a
          href="/leaderboard"
          className="text-xs text-primary hover:underline"
        >
          View Leaderboard →
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Link your coding accounts to appear on the club leaderboard. We verify
        ownership using a short code — no password needed.
      </p>

      {loading ? (
        <div className="flex justify-center py-8 text-muted-foreground text-sm">
          Loading…
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <PlatformSection
            platform="leetcode"
            userId={userId}
            profile={profile}
            onProfileUpdate={updateProfile}
          />
          <PlatformSection
            platform="codeforces"
            userId={userId}
            profile={profile}
            onProfileUpdate={updateProfile}
          />
        </div>
      )}
    </div>
  );
}
