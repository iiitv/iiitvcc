import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Coding Club IIITV",
  description:
    "IIITV Coding Club Community Website | Workshops | Mentorship | Community",
  openGraph: {
    title: "Coding Club IIITV",
    description:
      "IIITV Coding Club Community Website | Workshops | Mentorship | Community",
    images: ["https://iiitvcc.vercel.app/LinkPreview.png"],
    type: "website",
    locale: "en_IN",
    url: "https://iiitvcc.vercel.app",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
