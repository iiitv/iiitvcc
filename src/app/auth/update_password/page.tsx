"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import ErrorDialog from "@/components/error_dialog";
import Link from "next/link";

export default function Update_password() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function updatePassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (
      e.currentTarget.password.value !== e.currentTarget.confirmPassword.value
    ) {
      setErrorMsg("Passwords do not match");
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({
      password: e.currentTarget.password.value,
    });
    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.replace("/account");
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Update Password</h1>
          <p className="text-muted-foreground">
            Enter a new password to update your account.
          </p>
        </div>
        <form className="space-y-4" onSubmit={updatePassword}>
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter a new password"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-[8px] bg-primary py-6 px-4 text-md font-bold text-primary-foreground transition-colors focus:opacity-90 focus:outline-none"
              disabled={loading}
            >
              {loading ? (
                <i className="flex text-primary-foreground mr-2">
                  <Loader />
                </i>
              ) : (
                "Update Password"
              )}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link
            href="/auth/reset_password"
            className="inline-block text-sm underline text-muted-foreground"
            prefetch={false}
          >
            Back to Reset Password
          </Link>
        </div>
      </div>
      {errorMsg && <ErrorDialog error_message={errorMsg} />}
    </div>
  );
}
