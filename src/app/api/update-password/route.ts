import {NextRequest, NextResponse} from "next/server";
import { cookies } from 'next/headers';
import {createClient} from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.nextUrl.href)
  const code = requestUrl.searchParams.get('code')

  if( code ) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    return NextResponse.redirect(new URL(`${req.nextUrl.origin}/auth/update_password`, req.nextUrl.href))
  }

  console.log({error : 'ERROR: Invalid auth code or no auth code found'}, { status: 500 })

  return NextResponse.redirect(new URL(`${req.nextUrl.origin}/auth`, req.nextUrl.href))
}