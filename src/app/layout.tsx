import React from "react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import { Montserrat } from "next/font/google";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/css/global.css";
import Link from "next/link";

const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Holmes - A Real estate Conglomerate",
	description:
		"A Nextjs-based real estate platform with modules for agents, property owners, and clients, enabling property listings, inquiries, and management with a seamless user experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/seo/icons/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#199B6C" />
				<meta
					name="description"
					content="a bridge between housing and clients..."
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="manifest" href="/seo/manifest.json" />
				<link rel="apple-touch-icon" href="/seo/icons/apple-touch-icon.png" />

				<title>holmes - A Real estate Conglomerate.....</title>
			</head>
			<body className={`${montserrat.className}  antialiased text-black`}>
				<ToastContainer />
				{children}
				
			
				<SpeedInsights />
			</body>
		</html>
	);
}

