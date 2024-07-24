import React, { FormEvent, use, useEffect, useState } from "react";
import axios from "axios";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loader from '@/components/ui/loader'

import { VscEye, VscEyeClosed } from "react-icons/vsc"
import styles from './styles.module.css'
import { cn } from "@/lib/utils"


interface Props {
  auth: string | null
  SignUp: (e: EventTarget & HTMLFormElement) => Promise<boolean | void>
  Login: (e: EventTarget & HTMLFormElement) => Promise<boolean | void>
  EmailSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<boolean | void>
  email: string | null
  children?: React.ReactNode
}

export function Component( props : Props) {
  let { auth } = props
  const [password, setPassword] = useState<string>('')
  const [revealPassword, setRevealPassword] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false);

  let structure = {
    inputfield : {
      limit : 1,
      values : [
        {name: 'email', label: 'Email Adress', type: 'email'}
      ]
    },
    button : {
      text: 'continue',
      onsubmit: async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        const bool = await props.EmailSubmit(e);
        if (!bool) setLoading(false);
      }
    },
    content : {
      title: ['Welcome ', 'User'],
      subtitle: 'Enter your email to continue '
    }
  }
  if (auth === 'login') {
    structure.inputfield = {
      limit : 2,
      values : [
        {name: 'email', label: 'Email address', type: 'email'},
        {name: 'password', label: 'Password', type: 'password'}
      ]
    }
    structure.button = {
      text: 'Login',
      onsubmit: async (e) => {
        e.preventDefault();
        const current = e.currentTarget;
        setLoading(true);
        const bool = await props.Login(current);
        if (!bool) setLoading(false);
      }
    }
    structure.content = {
      title: ['Sign in to your ', 'account'],
      subtitle: ''
    }
  } else if (auth === 'signup'){
    structure.inputfield = {
      limit : 3,
      values : [
        {name: 'email', label: 'Email address', type: 'email'},
        {name: 'username', label: 'Username', type: 'text'},
        {name: 'password', label: 'Password', type: 'password'}
      ]
    }
    structure.button = {
      text: 'Sign up',
      onsubmit: async (e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const username = current.username.value;
        if ( username.length < 3 ) {
          const nextUserSibling = current.username.nextSibling as HTMLElement;
          nextUserSibling.innerText = 'Username must be at least 3 characters long';
          return ;
        }
        setLoading(true);
        const res = await axios.post('/api/rest/v1/isUsername', {username: username});

        if (res.data.state) {
          const nextUserSibling = current.username.nextElementSibling as HTMLElement;
          nextUserSibling.innerText = 'Username already exists';
        } else {
          const nextUserSibling = current.username.nextElementSibling as HTMLElement;
          nextUserSibling.innerText = '';
          if (validatePassword(password) && password.length>=8) {
            const bool = await props.SignUp(current)
            if (!bool) setLoading(false);

            const nextSibling = current.password.nextElementSibling as HTMLElement;
            nextSibling.innerText = '';
          } else {
            const nextSibling = current.password.nextElementSibling as HTMLElement;
            if (!validatePassword(password, 1)) {
              nextSibling.innerText = 'Password must be at least 8 characters long';
            } else if (!validatePassword(password, 2)) {
              nextSibling.innerText = 'Password must contain at least one uppercase, one lowercase and one digit';
            } else if (!validatePassword(password, 3)) {
              nextSibling.innerText = 'Password must contain at least one special character';
            }
          }
        }
        setLoading(false);
      }
    }
    structure.content = {
      title: ['Create an ' ,'account'],
      subtitle: ''
    }
  }

  
  useEffect(() => {
    if (props.email) {
      const emailElement = document.getElementById('email') as HTMLInputElement;
      if (emailElement) emailElement.value = props.email || '';
    }
  }, [props.email])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              {structure.content.title[0]}<span className="text-primary">{structure.content.title[1]}</span>
          </h2>
          { (structure.content.subtitle !== '') && <p className="mt-1 text-center text-sm tracking-tight text-foreground">{structure.content.subtitle}</p>}
        </div>
        <form className="space-y-6" onSubmit={structure.button.onsubmit}>
        {structure.inputfield.values.map((input) => (
          <div className="relative" key={input.name}>
            <Label htmlFor={input.name} className="sr-only">
              {input.label}
            </Label>
            <Input
              onChange={(e) => {
                if (input.name === 'password') setPassword(e.target.value)
                }}
              id={input.name}
              name={input.name}
              type={input.type === 'password' && revealPassword ? 'text' : input.type}
              autoComplete={input.name === 'password' ? 'current-password' : 'email'}
              required
              placeholder={input.label}
              disabled={(props.email && input.name === 'email' && auth)?true:false}
              className={cn("rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm",
                input.name === 'password' && 'pr-12')}
            />
            <span className={cn(styles.error)}></span>
            <i className={`${!(input.name === 'password') && 'hidden'} ${styles.inputicon} ${styles.eyeicon}`} onClick={() => setRevealPassword(!revealPassword)}>{revealPassword?<VscEyeClosed size='23px'/>:<VscEye size='23px'/>}</i>
          </div>
        ))}
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-[8px] bg-primary py-6 px-4 text-md font-bold text-primary-foreground transition-colors focus:opacity-90 focus:outline-none"
              disabled={loading}
            >
              {loading ?
                <i className="flex text-primary-foreground mr-2"><Loader /></i>: structure.button.text}
            </Button>
          </div>
        </form>
          {props.children}

      </div>
    </div>
  )
}

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password: string, customCheck: number = 0): boolean {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  const special = /[!@#$%^&*()_+]/;
  const upper_lower_digit = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!customCheck) return re.test(password);
  if (customCheck === 1) return password.length >= 8;
  if (customCheck === 2) return upper_lower_digit.test(password);
  if (customCheck === 3) return special.test(password);
  return false;
}
