/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pesindustrial.com.au',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
