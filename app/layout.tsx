import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "visioart",
		template: "%s | visioart.io",
	},
	description: "STILLS, MOTION & DIGITAL CONTENT\nFOR MUSIC, FASHION & LUXURY BRANDS",
	openGraph: {
		title: "VISIOART",
		description:
			"STILLS, MOTION & DIGITAL CONTENT\nFOR MUSIC, FASHION & LUXURY BRANDS",
		url: "https://visioart.io",
		siteName: "VISIOART",
		images: [
			{
				url: "https://visioart.io/logo_visioart_info.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "visioart",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/iconic_logo_visioart.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/Pump-W01-Light.otf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>

			<body
				className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
