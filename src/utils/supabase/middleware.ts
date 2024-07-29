import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

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

  if ( request.nextUrl.pathname === '/' ) return NextResponse.redirect(new URL('/home', request.nextUrl.href))


  if (request.nextUrl.pathname === '/auth/callback' || request.nextUrl.pathname === '/auth/confirm') return response

  
  let { data: {user}, error} = await supabase.auth.getUser()

  
  if (user && (request.nextUrl.pathname === '/auth/confirm_email' || request.nextUrl.pathname === '/auth' || request.nextUrl.pathname === '/auth/reset_password')) {
    response = NextResponse.redirect(new URL('/form_create', request.nextUrl.href))
  } else if (!user && ( request.nextUrl.pathname === '/form_create' )) {
    response = NextResponse.redirect(new URL('/auth', request.nextUrl.href))
  }else if (!user && request.nextUrl.pathname === '/test_api') {
    response = NextResponse.redirect(new URL('/auth', request.nextUrl.href))
  } else if (!user && request.nextUrl.pathname === '/auth/update_password') {
    response = NextResponse.redirect(new URL('/auth', request.nextUrl.href))
  }

  // const searchParams = request.nextUrl.searchParams
  
  // if (request.nextUrl.pathname === '/auth/confirm_email') {
  //   if (searchParams.get('user_email')) {
  //     if (!searchParams.get('id')) return NextResponse.redirect(new URL('/auth?error=No+ID+provided', request.nextUrl.href))
  //     let res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/admin/users/${searchParams.get('id')}`, {
  //       method: 'GET',
  //       headers: {
  //         "apikey": process.env.SERVICE_KEY!,
  //         "Authorization": `Bearer ${process.env.SERVICE_KEY!}`,
  //         "Content-Type": "application/json",
  //       }
  //     });

  //     const res_user = await res.json();
  //     if (res.status === 404 || !res_user?.email ) return NextResponse.redirect(new URL('/auth?error=user+not+found', request.nextUrl.href))
  //     if ( request.nextUrl.searchParams.get('user_email') !== res_user?.email ) {
  //       request.nextUrl.searchParams.set('user_email', res_user?.email as string)
  //       response = NextResponse.redirect(new URL(request.nextUrl.href))
  //       return response
  //     }
  //     if (res_user?.email_confirmed_at) return NextResponse.redirect(new URL('/auth?auth=login', request.nextUrl.href))
  //   }
  // }
  
  return response
}