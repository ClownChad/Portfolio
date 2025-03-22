import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production"

const nextConfig: NextConfig = {
  basePath: isProd ? "/Portfolio" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
