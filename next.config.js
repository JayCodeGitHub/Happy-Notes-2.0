/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/notes',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
