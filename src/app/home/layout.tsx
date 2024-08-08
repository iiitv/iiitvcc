import React from 'react';
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
<<<<<<< HEAD
=======
import type { Metadata } from "next";
>>>>>>> a53050d3b3abb1d3c6c5c28f33551fa418aba183


interface RootLayoutProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
=======
export const metadata: Metadata = {
  title: "Coding Club IIITV",
  description: "IIITV Coding Club Community Website | Workshops | Mentorship | Community",
  openGraph: {
    title: 'Coding Club IIITV',
    description: 'IIITV Coding Club Community Website | Workshops | Mentorship | Community',
    images: ["https://iiitvcc.vercel.app/LinkPreview.png"],
    type: 'website',
    locale: 'en_IN',
    url: 'https://iiitvcc.vercel.app',
  },
};

>>>>>>> a53050d3b3abb1d3c6c5c28f33551fa418aba183
export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> a53050d3b3abb1d3c6c5c28f33551fa418aba183
