import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  console.log("=== 1: API ROUTE HIT ===");

  const supabase = await createClient();
  console.log("=== 2: SUPABASE CLIENT CREATED ===");

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  console.log("=== 3: GET USER FINISHED ===", {
    userId: user?.id,
    authError,
  });

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  let body: { platform?: string; username?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { platform, username } = body;

  console.log("=== 4: REQUEST BODY ===", {
    platform,
    username,
  });

  if (!platform || !["leetcode", "codeforces"].includes(platform)) {
    return NextResponse.json(
      { error: "Invalid platform" },
      { status: 400 }
    );
  }

  if (
    !username ||
    typeof username !== "string" ||
    username.trim().length === 0
  ) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  const code = `IIITVCC-${crypto
    .randomBytes(3)
    .toString("hex")
    .toUpperCase()}`;

  console.log("=== 5: CODE GENERATED ===", code);

  const upsertData: Record<string, unknown> = {
    user_id: user.id,
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

  console.log("=== 6: ABOUT TO UPSERT ===", upsertData);

  const { error } = await supabase
    .from("coding_profiles")
    .upsert(upsertData, { onConflict: "user_id" });

  console.log("=== 7: UPSERT FINISHED ===", error);

  if (error) {
  console.error("=== SUPABASE UPSERT ERROR ===");
  console.error("message:", error.message);
  console.error("code:", error.code);
  console.error("details:", error.details);
  console.error("hint:", error.hint);
  console.error("error:", JSON.stringify(error, null, 2));

  return NextResponse.json(
    {
      error: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    },
    { status: 500 }
  );
}

  console.log("=== 8: SUCCESS ===");

  return NextResponse.json({ code });
}