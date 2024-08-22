import { createClient } from "@/utils/supabase/server";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const url = req.nextUrl.clone();
  url.pathname = "/account";
  url.searchParams.delete("code");

  if (code) {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        url.searchParams.set("auth", "login");
        url.searchParams.set("error", error.message);
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.log("x ", error);
    }
  }

  return NextResponse.redirect(url);
}
