import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
