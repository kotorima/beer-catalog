/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.punkapi.com"],
	},
	optimizeFonts: false,
};

module.exports = nextConfig;
