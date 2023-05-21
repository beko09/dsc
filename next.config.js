/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://beko09.github.io/Storybook-docs/index.html',
        permanent: true,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
