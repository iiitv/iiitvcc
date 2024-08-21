import React, { FormEvent, use, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

<<<<<<< HEAD
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Loader from '@/components/ui/loader'

// @react icons
// import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";

import { VscEye, VscEyeClosed } from "react-icons/vsc"
import styles from './styles.module.css'
import { cn } from "@/lib/utils"
=======
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Loader from "@/components/ui/loader";
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1

import { VscEye, VscEyeClosed } from "react-icons/vsc";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

interface Props {
  auth: string | null;
  SignUp: (e: EventTarget & HTMLFormElement) => Promise<boolean | void>;
  Login: (e: EventTarget & HTMLFormElement) => Promise<boolean | void>;
  EmailSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<boolean | void>;
  email: string | null;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export function Component( props : Props) {
  let { auth } = props
  const [password, setPassword] = useState<string>('')
  const [revealPassword, setRevealPassword] = useState<boolean>(false)
  const [validPassword, setValidPassword] = useState<boolean>(false)
=======
export function Component(props: Props) {
  let { auth } = props;
  const [password, setPassword] = useState<string>("");
  const [revealPassword, setRevealPassword] = useState<boolean>(false);
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setValidPassword(validatePassword(password));
  }
  , [password])

  const input_email = {name: 'email', label: 'Email Adress', type: 'email'};
  const input_username = {name: 'username', label: 'Username', type: 'text'};
  const input_password = {name: 'password', label: 'Password', type: 'password'};

  let structure = {
<<<<<<< HEAD
    inputfield : {
      limit : 1,
      values : [input_email]
=======
    inputfield: {
      limit: 1,
      values: [{ name: "email", label: "Email Adress", type: "email" }],
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
    },
    button: {
      text: "continue",
      onsubmit: async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        const bool = await props.EmailSubmit(e);
        if (!bool) setLoading(false);
      },
    },
    content: {
      title: ["Welcome ", "User"],
      subtitle: "Enter your email to continue ",
    },
  };
  if (auth === "login") {
    structure.inputfield = {
<<<<<<< HEAD
      limit : 2,
      values : [input_email, input_password]
    }
=======
      limit: 2,
      values: [
        { name: "email", label: "Email address", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ],
    };
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
    structure.button = {
      text: "Login",
      onsubmit: async (e) => {
        e.preventDefault();
        const current = e.currentTarget;
        setLoading(true);
        const bool = await props.Login(current);
        if (!bool) setLoading(false);
      },
    };
    structure.content = {
      title: ["Sign in to your ", "account"],
      subtitle: "",
    };
  } else if (auth === "signup") {
    structure.inputfield = {
<<<<<<< HEAD
      limit : 3,
      values : [input_email, input_username, input_password]
    }
=======
      limit: 3,
      values: [
        { name: "email", label: "Email address", type: "email" },
        { name: "username", label: "Username", type: "text" },
        { name: "password", label: "Password", type: "password" },
      ],
    };
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
    structure.button = {
      text: "Sign up",
      onsubmit: async (e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const username = current.username.value;
        if (username.length < 3) {
          const nextUserSibling = current.username.nextSibling as HTMLElement;
          nextUserSibling.innerText =
            "Username must be at least 3 characters long";
          return;
        }
        setLoading(true);
        const res = await axios.post("/api/rest/v1/isUsername", {
          username: username,
        });

        if (res.data.state) {
          const nextUserSibling = current.username
            .nextElementSibling as HTMLElement;
          nextUserSibling.innerText = "Username already exists";
        } else {
<<<<<<< HEAD
          const nextUserSibling = current.username.nextElementSibling as HTMLElement;
          nextUserSibling.innerText = '';
          if (validPassword) {
            const bool = await props.SignUp(current)
=======
          const nextUserSibling = current.username
            .nextElementSibling as HTMLElement;
          nextUserSibling.innerText = "";
          if (validatePassword(password) && password.length >= 8) {
            const bool = await props.SignUp(current);
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
            if (!bool) setLoading(false);

            const nextSibling = current.password
              .nextElementSibling as HTMLElement;
            nextSibling.innerText = "";
          } else {
<<<<<<< HEAD
            const nextSibling = current.password.nextElementSibling as HTMLElement;
            nextSibling.innerText = 'Enter a valid password';
=======
            const nextSibling = current.password
              .nextElementSibling as HTMLElement;
            if (!validatePassword(password, 1)) {
              nextSibling.innerText =
                "Password must be at least 8 characters long";
            } else if (!validatePassword(password, 2)) {
              nextSibling.innerText =
                "Password must contain at least one uppercase, one lowercase and one digit";
            } else if (!validatePassword(password, 3)) {
              nextSibling.innerText =
                "Password must contain at least one special character";
            }
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
          }
        }
        setLoading(false);
      },
    };
    structure.content = {
      title: ["Create an ", "account"],
      subtitle: "",
    };
  }

  useEffect(() => {
    if (props.email) {
      const emailElement = document.getElementById("email") as HTMLInputElement;
      if (emailElement) emailElement.value = props.email || "";
    }
  }, [props.email]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            {structure.content.title[0]}
            <span className="text-primary">{structure.content.title[1]}</span>
          </h2>
          {structure.content.subtitle !== "" && (
            <p className="mt-1 text-center text-sm tracking-tight text-foreground">
              {structure.content.subtitle}
            </p>
          )}
        </div>
        <form className="space-y-6" onSubmit={structure.button.onsubmit}>
<<<<<<< HEAD
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
                input.name === 'password' && 'pr-12', input.name !=='email' && 'pl-12',
                validPassword && input.name === 'password' && auth === 'signup' && 'border-green-600 focus:border-green-600',)}
            />
            <span className={cn(styles.error)}></span>
            <i className={cn(!(input.name === 'password') && 'hidden', styles.inputicon, styles.eyeicon)} onClick={() => setRevealPassword(!revealPassword)}>{revealPassword?<VscEyeClosed size='23px'/>:<VscEye size='23px'/>}</i>
            <i className={cn('text-muted-foreground' , validPassword && input.name === 'password' && auth === 'signup' && 'text-green-700 text:border-green-700',styles.inputicon, styles.mailicon)}>
              {input.name === 'username' && <FaRegUserCircle size='23px'/>}
              {input.name === 'password' && (( auth === 'signup' && !validPassword ) ? <FiUnlock size='23px'/>:<FiLock size='23px'/>)}
            </i>
          </div>
        ))}
        
        {auth === 'signup' && 
        <ul className="text-white/70 text-[.8rem] px-[1rem] w-full space-y-[1px]">
            <b>Your password must be</b>
            <li>&nbsp; {validatePassword(password, 2)?<span className="text-green-700"><b>&#10003;</b></span>:<span>&#x2022;&nbsp;</span>} uppercase/lowercase  and digits</li>
            <li>&nbsp; {validatePassword(password, 3)?<span className="text-green-700"><b>&#10003;</b></span>:<span>&#x2022;&nbsp;</span>} special characters like !@#$%^&*()_+</li>
            <li>&nbsp; {validatePassword(password, 1)?<span className="text-green-700"><b>&#10003;</b></span>:<span>&#x2022;&nbsp;</span>} at least 8 characters long</li>
        </ul>
        }
        
        {auth === 'login' &&
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 rounded text-primary focus:ring-primary"
                checked
                disabled
              />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                Remember me
=======
          {structure.inputfield.values.map((input) => (
            <div className="relative" key={input.name}>
              <Label htmlFor={input.name} className="sr-only">
                {input.label}
>>>>>>> e436f9a6b084ae16249a55e8d74868c9bc4c86e1
              </Label>
              <Input
                onChange={(e) => {
                  if (input.name === "password") setPassword(e.target.value);
                }}
                id={input.name}
                name={input.name}
                type={
                  input.type === "password" && revealPassword
                    ? "text"
                    : input.type
                }
                autoComplete={
                  input.name === "password" ? "current-password" : "email"
                }
                required
                placeholder={input.label}
                disabled={
                  props.email && input.name === "email" && auth ? true : false
                }
                className={cn(
                  "rounded-[8px] border border-input bg-background px-4 py-6 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none sm:text-sm",
                  input.name === "password" && "pr-12",
                )}
              />
              <span className={cn(styles.error)}></span>
              <i
                className={`${!(input.name === "password") && "hidden"} ${styles.inputicon} ${styles.eyeicon}`}
                onClick={() => setRevealPassword(!revealPassword)}
              >
                {revealPassword ? (
                  <VscEyeClosed size="23px" />
                ) : (
                  <VscEye size="23px" />
                )}
              </i>
            </div>
          ))}

          {auth === "login" && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 rounded text-primary focus:ring-primary"
                  checked
                  disabled
                />
                <Label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-foreground"
                >
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  href="auth/reset_password"
                  className="font-medium text-primary hover:text-primary/80"
                  prefetch={false}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}
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
                structure.button.text
              )}
            </Button>
          </div>
        </form>
        {props.children}
      </div>
    </div>
  );
}

function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password: string, customCheck: number = 0): boolean {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  const special = /[!@#$%^&*()_+]/;
  const upper_lower_digit = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  if (!customCheck) return re.test(password);
  if (customCheck === 1) return password.length >= 8;
  if (customCheck === 2) return upper_lower_digit.test(password);
  if (customCheck === 3) return special.test(password);
  return false;
}
