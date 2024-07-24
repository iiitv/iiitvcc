'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';

import Image from 'next/image';

export default function Confirm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    supabase.auth.getUser().then(({ data , error }) => {
      if (error) {
        console.log(error.message);
        return;
      }
      console.log(data);
    });
  }, []);

  const searchParams = useSearchParams();
  const user_email = searchParams.get('user_email');

  if (!user_email) return null;

  if(!validateEmail(user_email)) {
    return (
      <div className="flex justify-center flex-row items-center mt-10">
        <XIcon className="w-24 h-24" />
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary">
            Invalid email address:
        </h2>
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary pl-2">
            <a href="mailto:{{email}}" className="text-primary underline">{user_email}</a>
        </h2>
      </div>
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('The email confirmation link has expired. Please sign up again to receive a new confirmation email.');
    }, 1000 * 60 * 60 );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
        if (countdown === 0) {
          setLoading(false);
          setCountdown(10);
        }
      }, 1000);
    }
  }, [loading, countdown]);

  const resent = async () => {
    const origin = window.location.origin;
    setLoading(true)
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: user_email,
      options: {
        emailRedirectTo: `${origin}/auth/confirm`,
      }
    })
    if (error) {
      setError(error.message)
    } else {
      setError(null)
    }
  }

  return (
    <div className="flex min-h-[100dvh] lg:flex-row flex-col bg-background">
      <div className="lg:h-[100vh] h-[50vh] w-[100vw] flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 lg:scale-[1.1]">
        <div className="mx-auto max-w-md text-center">
          <CircleCheckIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Email Sent!</h1>
          <div className="mx-auto max-w-md text-center">
          <p className="mt-4 text-muted-foreground">
            We've sent a confirmation email to <span className="font-medium">{user_email}</span>. Click the link in
            the email to verify your account.
          </p>
          <div className="mt-6 flex flex-col items-center lg:justify-end justify-center gap-4 sm:flex-row">
            <Button
              onClick={resent}
              disabled={loading}
              className="inline-flex items-center rounded-md border border-input bg-background px-5 py-[1.5em] text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
            >
              Resend Email
            </Button>
            <Link
              href="/auth"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary focus:outline-none"
              prefetch={false}
            >
              Return to Login
            </Link>
          </div>
          <div className="mt-4 text-muted-foreground">
            {loading && <p className="text-muted-foreground">Resending email in {countdown} seconds...</p>}
          </div>
          <div className="mt-4 text-muted-foreground">
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
        </div>
      </div>
      <div className="lg:h-[100vh] h-[50vh] w-[100vw] flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Image src="/auth/confirm_email_logo.svg" alt="Confirm Email" className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]" width={300} height={300} />
      </div>
    </div>
  );
}


const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function CircleCheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function XIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}