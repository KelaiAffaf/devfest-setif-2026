/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export, served by GitHub Pages
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: process.env.SITE_ORIGIN || 'http://localhost:3000',
  },
};

export default nextConfig;
