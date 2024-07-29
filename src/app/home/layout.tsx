import React from 'react';
import Navbar from "@/components/navbar"


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}