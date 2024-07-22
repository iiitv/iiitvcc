'use server';
import { cookies, headers } from 'next/headers';
import { RedirectType, redirect } from "next/navigation";
import { createClient } from '@/utils/supabase/server';

export const Login = async (
    credentials : {
        email: string ,
        password: string ,
    }) => {
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email: credentials.email as string,
            password: credentials.password as string,
        });
        if (error) {
          return { error: error.message };
        }
        return { error: null };
}

export const SignUp = async (
    credentials : {
        email: string ,
        password: string ,
    }) => {
        const origin = headers().get("origin");
        const referer = headers().get("referer");
        const query = referer?.split('?')[1].split('&');
        const org = query?.find((q) => q.includes('organisation')) || '';

        const supabase = createClient();
        const { data: { session }, error, } = await supabase.auth.signUp({
            email: credentials.email as string,
            password: credentials.password as string,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });
        if (error) {
          return { error: error.message };
        }
        if (session) {
          return { error: 'Email already exists' };
        }
        return { error: null };
};

export const AuthSignIn = async () => {
    const origin = headers().get("origin");
    const gmail = cookies()?.get('email')?.value || '';
    
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${origin}/auth/callback`,
          queryParams: {
                include_granted_scopes: 'true',
                access_type: 'offline',
                prompt: 'select_account',
                login_hint: gmail,
            },
        },
    });
    if (error) return { error: error.message, url: null };
    if (data.url) return { error: null, url: data.url };
    return { error: 'Error signing in', url: null };
}

export async function usernameExisits(username: string): Promise<boolean> {
  const supabase = createClient();
  let { data, error } = await supabase
      .rpc('is_username_exist', {
        username: username,
      });
      if (error) console.error(error)
  return data;
}

export const checkEmailForOrganisation = (
  credentials : {
    email: string ,
  }) => {
    const cookiesStore = cookies();
    const organisation = new Set(['iiitv.ac.in', 'iiitvadodara.ac.in']);
    cookiesStore.set('email', credentials.email as string);
    if (organisation.has(credentials.email.split('@')[1])) {
      redirect(`?auth=login&organisation=iiitv`);
    }
    redirect(`?auth=login`);
}