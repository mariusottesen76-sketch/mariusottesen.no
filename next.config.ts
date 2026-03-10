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
  async redirects() {
    return [
      {
        source: "/sales-coach",
        destination: "https://salescoach.mariusottesen.no",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
