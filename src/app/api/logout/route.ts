import {NextRequest, NextResponse} from "next/server";
import {createClient} from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  return NextResponse.redirect(new URL("/form_create", req.url))
}