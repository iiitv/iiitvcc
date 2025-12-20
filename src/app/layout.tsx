import type { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "@/components/loading";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import Head from "next/head";

const spotifyMix = localFont({
  src: [
    {
      path: "../font/SpotifyMix-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-ExtraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../font/SpotifyMix-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-spotify",
  display: "swap",
});

const fontHeading = localFont({
  src: [
    {
      path: "../font/SpotifyMix-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = localFont({
  src: [
    {
      path: "../font/SpotifyMix-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SpotifyMix-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
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
          spotifyMix.variable,
          fontHeading.variable,
          fontBody.variable,
          "antialiased",
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
