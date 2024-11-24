import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: "http://localhost:8000/api",
    theme: "DEFAULT",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ui-lib.com" }],
  },
  // images: {
  //   domains: ["www.watchmojo.com"], // Add the domain here
  // },
};

export default nextConfig;
