import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/favicon.ico", destination: "/images/moc.logo.png" },
      {
        source: "/sales-coach",
        destination: "https://predictive-sales-coach-v2.vercel.app",
      },
    ];
  },
};

export default nextConfig;
