/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
}

module.exports = nextConfig
