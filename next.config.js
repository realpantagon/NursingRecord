/** @type {import('next').NextConfig} */

const API = process.env.BACKEND_PROXY_URL;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
