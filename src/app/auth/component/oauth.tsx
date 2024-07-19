import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import CircularProgress from '@mui/material/CircularProgress';

import { JSX, SVGProps } from "react"

interface Props{
  onClick: () => Promise<void>
}

export function OAuthComponent(props : Props) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button
        onClick = {async () => {
          setLoading(true);
          props.onClick().then(() => {
            setLoading(false)
          });
        }}
        variant="outline"
        className="group relative flex w-full justify-center rounded-md border border-input bg-background py-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2"
      >
        {loading ? <i style={{display: 'flex', color: '#00000' }}><CircularProgress color="inherit" size={30} thickness={2} style={{}}/></i>:
        <>
          <ChromeIcon className="mr-2 h-5 w-5" /> Continue with Google
        </>}
      </Button>
    </>
  )
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}