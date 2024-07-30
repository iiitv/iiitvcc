import React from 'react';
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Head from 'next/head';


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="Coding Club IIITV" />
        <meta property="og:site_name" content="IIITVCC" />
        <meta property="og:url" content="https://iiitvcc.vercel.app" />
        <meta property="og:description" content="IIITVCC Community Website | Workshops | Mentorship | Community" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://iiitvcc.vercel.app/LinkPreview.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
