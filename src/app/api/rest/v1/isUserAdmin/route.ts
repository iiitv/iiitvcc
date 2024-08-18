import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json({ isAdmin: false }, { status: 200 });
    }
    const isAdmin = await supabase
      .from("users")
      .select("admin")
      .eq("id", user.id);

    if (isAdmin) {
      return NextResponse.json({ isAdmin: true }, { status: 200 });
    } else {
      return NextResponse.json({ isAdmin: false }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ isAdmin: false }, { status: 200 });
  }
}
