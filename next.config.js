/** @type {import('next').NextConfig} */

const API = process.env.BACKEND_PROXY_URL;
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: "/api/:path",
				destination: `/login`,
			},
		];
	},
};

module.exports = nextConfig;
