'use client';
import React , { useState, Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams} from 'next/navigation';
import { useCookies } from 'next-client-cookies';

import { Login, SignUp, AuthSignIn, checkEmailForOrganisation } from './action';

import { Component } from './component/component';
import { OAuthComponent } from './component/oauth';

import Alert from '@/components/ui/alert';
import Loading from '@/components/loading';

const Path = (path: string, org: string | null) => {
    if (org) return `/auth?auth=${path}&organisation=${org}`;
    return `/auth?auth=${path}`;
}

export default function Auth(){
    const router = useRouter();

    const [error, setError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const auth = searchParams.get('auth');
    const organisation = searchParams.get('organisation');
    const oauthhidden = organisation==='iiitv'?true:false;
    const err = searchParams.get('error');

    useEffect(() => {
        if (err) setError(err);
    }, [err]);

    const cookies = useCookies();
    const email = cookies.get('email') || null;
    if(!email && auth) router.push('/auth');

    const emailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        checkEmailForOrganisation({email});
    }

    async function login(current: EventTarget & HTMLFormElement) {
        const email = current.email.value;
        const password = current.password.value;
        setError(null);
        const { error } = await Login({email, password})
        if (error) {
          setError(error);
          return false;
        } else {
          router.push('/form_create');
        }
    }

    const signup = async (cur: EventTarget & HTMLFormElement) => {
        const email = cur.email.value;
        const username = cur.username.value;
        const password = cur.password.value;

        setError(null);
        const { user_id, error } = await SignUp({username, email, password})
        console.log(error);
        if (error) {
          setError(error);
          return false;
        } else {
          router.push(`/auth/confirm_email?id=${user_id}&user_email=${email}`);
        }
    }

    const Authsignin = async () => {
      setError(null);  
      const { error, url } = await AuthSignIn();
      if (error) {
        setError(error);
      } else if (url) {
        router.push(url);
      }
    }

    return (
      <Suspense fallback={<Loading />}>
        {error &&
        <Alert
          status="error"
          message={error || ''}
        />}
        <Component
          auth={auth}
          SignUp={signup}
          Login={login}
          EmailSubmit={emailSubmit}
          email={email}>

          { auth && (<div className="text-red-500 text-center">
              <div className="mt-2 text-center text-sm text-muted-foreground">
              {auth === 'signup' ?
              <p>Have an account? <Link href={Path('login', organisation)} className="font-medium text-primary hover:text-primary/90" prefetch={false}>Login</Link></p> :
              <p>Don&apos;t have an account? Create <Link href={Path('signup', organisation)} className="font-medium text-primary hover:text-primary/90" prefetch={false}>here</Link></p>}
              </div>
            </div>)}

          {oauthhidden && <OAuthComponent onClick={Authsignin} />}
        </Component>
      </Suspense>
    )
}
