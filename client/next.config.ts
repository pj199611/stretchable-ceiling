import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:"http://localhost:8000/api",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // images: {
  //   domains: ["www.watchmojo.com"], // Add the domain here
  // },
};

export default nextConfig;
