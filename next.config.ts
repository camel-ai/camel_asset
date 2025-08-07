import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/camel_asset' : '',
};

export default nextConfig;
