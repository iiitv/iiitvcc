import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })

  const body = await req.json()

  if ( !body.username ) {
    return NextResponse.json({ error: 'username is required' })
  }

  let res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/is_username_exist`, {
    method: 'POST',
    headers: {
      "apikey": process.env.SERVICE_KEY!,
      "Authorization": `Bearer ${process.env.SERVICE_KEY!}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });
  
  let data = await res.json();
  
  return NextResponse.json({ state: data });
}