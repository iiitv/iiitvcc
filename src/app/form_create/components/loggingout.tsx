import React from 'react'
import { SVGProps } from 'react'
import Loader from '@/components/ui/loader'

export function LoggingOut() {
  return (
    <div className="grid min-h-[100dvh] w-full bg-background">
      <main className="flex flex-col items-center justify-center gap-4 px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2">
          <LogOutIcon className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight flex items-center"><span className="mr-3">Logging out...</span><Loader /></h1>
          <p className="text-muted-foreground">You are being logged out of your account.</p>
        </div>
      </main>
    </div>
  )
}

function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}