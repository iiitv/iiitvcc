"use server";

import { createClient } from "@/utils/supabase/server";
import crypto from "crypto";

type Platform = "leetcode" | "codeforces";

export async function generateVerifyCode(platform: Platform, username: string) {
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

    if (!username || typeof username !== "string" || username.trim().length === 0) {
      return { success: false, message: "Username is required" };
    }

    // Generate a unique 6-char hex code
    const code = `IIITVCC-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;

    const upsertData: Record<string, unknown> = {
      user_id: data.user.id,
      updated_at: new Date().toISOString(),
    };

    if (platform === "leetcode") {
      upsertData.leetcode_username = username.trim();
      upsertData.leetcode_verify_code = code;
      upsertData.leetcode_verified = false;
      upsertData.leetcode_rating = null;
    } else {
      upsertData.codeforces_username = username.trim();
      upsertData.codeforces_verify_code = code;
      upsertData.codeforces_verified = false;
      upsertData.codeforces_rating = null;
    }

    const { error: upsertErr } = await supabase
      .from("coding_profiles")
      .upsert(upsertData, { onConflict: "user_id" });

    if (upsertErr) {
      return { success: false, message: upsertErr.message };
    }

    return { success: true, code };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
