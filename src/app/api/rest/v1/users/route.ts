import {NextRequest, NextResponse} from "next/server";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })

  const body = await req.json()
  const supabase = createClient();
  const searchParams = req.nextUrl.searchParams;
  const option = searchParams.get('option');

  let data: User | User[] | null = null;

  if ( option === 'insert' ) {
    const { data: user, error: error } = await supabase
      .from('users')
      .insert([{id: body.id, username: body.username, admin: body.admin}])
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    data = user;
  } else if ( option === 'update' ) {
    const { data: user, error: error } = await supabase
      .from('users')
      .update({username: body.username})
      .match({id: body.id})
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    data = user;
  }

  return NextResponse.json({ data: data });
}