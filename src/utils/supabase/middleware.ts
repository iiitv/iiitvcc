import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: {user}} = await supabase.auth.getUser()
  if (user && !user?.confirmed_at && request.nextUrl.pathname === '/form_create') {
    response = NextResponse.redirect(new URL('/auth/confirm_email', request.nextUrl.href))
  } else if (user?.confirmed_at && request.nextUrl.pathname === '/auth/confirm_email') {
      response = NextResponse.redirect(new URL('/form_create', request.nextUrl.href))
  } else if (user && request.nextUrl.pathname === '/auth') {
    response = NextResponse.redirect(new URL('/form_create', request.nextUrl.href))
  } else if (!user && request.nextUrl.pathname === '/form_create') {
    response = NextResponse.redirect(new URL('/auth', request.nextUrl.href))
  }else if (!user && request.nextUrl.pathname === '/test_api') {
    response = NextResponse.redirect(new URL('/auth', request.nextUrl.href))
  }

  return response
}