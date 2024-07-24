'use client';
import React, { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import axios from 'axios';

import { UserForm } from './component/userform';

import { cn } from '@/lib/utils';

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [username , setUsername] = useState<string | null>(null);
  const [useremail , setUserEmail] = useState<string | null>(null);
  const [error_message, setErrorMessage] = useState<string | null>(null);

  const [usernameInput, setUsernameInput] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  
  useEffect(() => {
    console.log()
    const getUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.log(error.message);
        return;
      }
      setUser(user);
      setUserEmail(user?.email || null);
    }
    getUser();
  }, []);

  useEffect(() => {
    return () => {

      if ( user ) {
        getUserData();
      }
    };
  }, [user]);
  
  const getUsernameFromUser = async () => {
    if (searchParams.get('username')) {
      const res = await axios.post('/api/rest/v1/isUsername', {username: searchParams.get('username')});
      if (!res.data.state) {
        axios.post('/api/rest/v1/users?option=insert', {id: user?.id, username: searchParams.get('username')})
        .then((res) => {
          if (res.data.error) {
            setErrorMessage(res.data.error);
            return {error: res.data.error};
          }
          setUsername(searchParams.get('username'));
        })
        return {error: null};
      }
    }
    setUsernameInput(true);
    return {error: null};
  }

  let getUserData = useCallback(async () => {
    try {
      setLoading(true);
      if (!user) throw new Error('No user on the session');

      const { data, error, status } = await supabase
          .from('users')
          .select('username')
          .eq('id', user.id)
          .single();

      if (status === 406) {
        const { error } = await getUsernameFromUser()
        if (error) throw error;return;
      }
      if (error && status !== 406 ) throw error;
      if (data) {
        setUsername(data.username);
      }
    }
    catch (error: any) {
      console.log(error.message);
    }
    finally {
      setLoading(false);
    }
  }
  , [user]);

  return (
    <>
    {usernameInput ? (
      <UserForm user_id={user?.id || ''} email={useremail} />
    ):(
      <div>
        <h1 >Welcome, {username}</h1>
        <p>{useremail}</p>
        {error_message && <p className='text-destructive'>{error_message}</p>}
        {loading && <p>Loading...</p>}
        <Link
          aria-disabled={loading}
          href="/api/logout"
          className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Logout
        </Link>
      </div>
    )}
    </>
  );
}