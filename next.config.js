/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    scrollRestoration: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workspace.hidacolle.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  trailingSlash: true
};