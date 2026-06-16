/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/grok-landing',
  assetPrefix: '/grok-landing/',
  trailingSlash: true,
};

export default nextConfig;
