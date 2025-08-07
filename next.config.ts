import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/mcp', // Commented out to run at root
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;
