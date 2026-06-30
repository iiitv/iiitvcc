/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "aceternity.com" },
      { protocol: "https", hostname: "znqzvqyxyjzjpfnfwdjz.supabase.co" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
