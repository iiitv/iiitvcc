'use client';
import React from 'react';
import { supabase } from '@/utils/supabase/client';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

export default async function Page() {
  const { data : {user}} = await supabase.auth.getUser();
  const { data, error } = await supabase.from('users').select('username').eq('id', user?.id);
  const userdata = data && data[0];
  const username = userdata && ( 'username' in userdata && userdata.username || user?.identities);

  const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Sign out error', error.message);
    window.location.reload();
  };
  return (
    <div>
      <h1 >Welcome, {username}</h1>
      <Button onClick={Logout}>Logout</Button>
    </div>
  );
}