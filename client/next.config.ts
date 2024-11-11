import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: 'http://localhost:8000/api',
  },
};

export default nextConfig;
