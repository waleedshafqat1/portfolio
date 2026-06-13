/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'img.icons8.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'waleedshafqat.com',
          },
        ],
        destination: 'https://www.waleedshafqat.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
