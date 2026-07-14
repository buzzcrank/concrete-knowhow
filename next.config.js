/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'concrete-knowhow.vercel.app' }],
        destination: 'https://concrete.mrknowitall.net/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
