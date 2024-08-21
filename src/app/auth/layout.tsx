import { CookiesProvider } from "next-client-cookies/server";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
