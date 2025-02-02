import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: "http://localhost:8000/api",
    theme: "DEFAULT",
  },
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
