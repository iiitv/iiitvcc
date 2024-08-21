import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/account";

  const redirectTo = req.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  if (token_hash) {
    const supabase = createClient();
    const { error, data } = await supabase.auth.verifyOtp({
      type: type || "email",
      token_hash: token_hash,
    });
    if (!error) {
      redirectTo.searchParams.delete("next");
      return NextResponse.redirect(redirectTo);
    }
  }

  redirectTo.pathname = "/auth";
  redirectTo.searchParams.set("auth", "signup");
  redirectTo.searchParams.set("error", "Invalid token hash");
  return NextResponse.redirect(redirectTo);
}
