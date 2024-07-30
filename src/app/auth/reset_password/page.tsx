'use client';

import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ErrorDialog from '@/components/error_dialog'
import Loader from '@/components/ui/loader'


const ResetPassword = () => {
  const cookies = useCookies();
  const loginpath = cookies.get('email') != ''?'/auth?auth=login':'/auth';

  const [email, setEmail] = useState<string>(cookies.get('email') || '');
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [successMsg, setSuccessMsg] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);


  async function resetPassword(formData: { email: string; }) {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
      redirectTo: `${window.location.origin}/api/update-password`,
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Password reset instructions sent.');
    }

  }

  return (
  <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Forgot <span className="text-primary">Password</span></h1>
        <p className="text-muted-foreground">Enter your email below to reset your password.</p>
      </div>
      <Card>
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          resetPassword({ email });
        }}>
          <CardContent className="space-y-4">
            <div className="space-y-2 mt-3">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e) => {
                setEmail(e.target.value);
              }} id="email" type="email" name="email" value={email} placeholder="m@example.com" required />
            </div>
            <div>
              <Button
                type="submit"
                className="group relative flex w-full justify-center rounded-[8px] bg-primary py-6 px-4 text-md font-bold text-primary-foreground transition-colors focus:opacity-90 focus:outline-none disabled:opacity-60"
                disabled={loading || !email}
              >
                {loading ?
                  <i className="flex text-primary-foreground mr-2"><Loader /></i>: 'Reset Password'}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="text-center text-primary">
            <Link href={loginpath} className="text-sm" prefetch={false}>
              Return to Login
            </Link>
          </CardFooter>
        </form>
      </Card>
      <p className="text-muted text-center">{successMsg}</p>
    </div>
    
    {errorMsg && <ErrorDialog error_message={errorMsg} />}
  </div>
  );
};

export default ResetPassword;