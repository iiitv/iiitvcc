import type { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "@/components/loading";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <body
        className={cn(
          inter.className,
          "antialiased",
          fontHeading.variable,
          fontBody.variable,
        )}
      >
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
