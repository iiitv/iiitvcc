'use client';
import React, { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import axios from 'axios';

import { UserForm } from './components/userform';
import { Form } from './components/form';
import { Dropdown_Menu } from "./components/dropdown_menu";
import { LoggingOut } from './components/loggingout';
import ErrorDialog from '@/components/error_dialog';

import { cn } from '@/lib/utils';

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [username , setUsername] = useState<string | null>(null);
  const [useremail , setUserEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [usernameInput, setUsernameInput] = useState<boolean>(false);

  const [loading, setLoading] = useState(true);
  const [loggingoff, setLogout] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
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
            setError(res.data.error);
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
  }, [user]);

  const logout = async () => {
    setLogout(true);
    axios.get('/api/logout')
    .then(() => {
      router.push('/auth');
    })
  }


  return (
    loggingoff ?
      (
        <LoggingOut /> 
      ):(
        <>
          {usernameInput ? (
            <UserForm user_id={user?.id || ''} email={useremail} />
          ):(
            <>
              <Dropdown_Menu username={username} email={useremail} onLogout={logout}/>
              <Form username={username} email={useremail} disabled={(error || loading) ?true:false}/>
            </>
          )}
          {error && <ErrorDialog error_message={error} />}
        </>
      )
  );
}