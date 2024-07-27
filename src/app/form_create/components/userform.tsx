import React, { useState, useEffect, useCallback, use } from "react";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Loader from '@/components/ui/loader'

import styles from './styles.module.css'
import { cn } from "@/lib/utils";


interface PropsType {
  email: string | null,
  user_id: string,
}

export function UserForm( {user_id, email}: PropsType) {
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const controller = new AbortController();
  const signal = controller.signal;

  const isExist = useCallback(async () => {
    const res = await axios.post('/api/rest/v1/isUsername', {username: username}, {signal});
    if (res.data.state) {
      setDisabled(true);
      setError('Username already exists');
    } else {
      setDisabled(false);
      setError('');
    }
  }, [username]);

  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (username) {
      timer = setTimeout(() => {
        isExist();
      }, 400)
    }
    return () => {
      controller.abort();
      clearTimeout(timer);
    }
  }, [username]);

  useEffect(() => {
    if (!username) {
      console.log('username is empty');
      setError('');
      setDisabled(true);
    }
  }, [username, disabled, error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome, <span className="text-primary">{email?.split('@')[0]}</span>
          </h2>
          <p className="mt-1 text-center text-sm tracking-tight text-foreground">Please enter an username</p>
        </div>
        <form className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            axios.post(`/api/rest/v1/users?option=insert`, {id: user_id, username: username})
              .then((res) => {
                if (res.data.error) {
                  setError(res.data.error);
                  setLoading(false);
                } else {
                  setLoading(false);
                  window.location.href = '/form_create';
                }
              })
              .catch((error) => {
                setError(error.message);
                setLoading(false);
              });
          }}>
        <div className="relative">
          <Label htmlFor={'username'} className="sr-only">
            Username
          </Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            id={'username'}
            name={'username'}
            type={'text'}
            autoComplete={'username'}
            required
            placeholder={'Username'}
            disabled={loading}
            className={cn("rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm")}
          />
          <span className={cn(styles.error)}>{error}</span>
        </div>
        <div>
          <Button
            type="submit"
            className="group relative flex w-full justify-center rounded-[8px] bg-primary py-6 px-4 text-md font-bold text-primary-foreground transition-colors focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            disabled={loading || disabled}
          >
              {loading ?
                <i className="flex text-primary-foreground mr-2"><Loader /></i>
              : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}