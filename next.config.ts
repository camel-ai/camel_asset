import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/camel_asset',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/camel_asset/',
  trailingSlash: true,
};

export default nextConfig;