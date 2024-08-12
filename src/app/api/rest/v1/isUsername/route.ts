import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const body = await req.json();
    if (!body.username) {
      return NextResponse.json(
        { error: "username is required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase.rpc("is_username_exist", {
      username: body.username,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ state: data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
