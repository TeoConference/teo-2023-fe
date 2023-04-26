/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://teoconference.github.io/teo-2023-fe/" : "",
  reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig
