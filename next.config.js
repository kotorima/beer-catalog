/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.punkapi.com"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		additionalData: `@import "styles/_fonts.scss"; @import "styles/_adaptive.scss"; @import "styles/_mixins.scss";`,
	},
};

module.exports = nextConfig;
