import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Leaderboard | Coding Club IIITV",
  description:
    "See how IIITV Coding Club members rank on LeetCode and Codeforces. Compete, improve, and rise to the top.",
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
