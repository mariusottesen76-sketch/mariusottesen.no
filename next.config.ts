import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/favicon.ico", destination: "/images/moc.logo.png" },
    ];
  },
};

export default nextConfig;
