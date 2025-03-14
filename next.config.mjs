/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const production = process.env.NODE_ENV === "production";

const withPWA = nextPWA({
	dest: "public",
	disable: !production,
	swSrc: "service-worker.js",
});

const nextConfig = {
	images: {
		unoptimized: true,
	},
};

export default withPWA(nextConfig);
