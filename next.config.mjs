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
    // Public site URL for social previews: explicit SITE_ORIGIN (GitHub Pages),
    // else the production domain Vercel exposes at build time.
    NEXT_PUBLIC_SITE_ORIGIN:
      process.env.SITE_ORIGIN ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'http://localhost:3000'),
  },
};

export default nextConfig;
