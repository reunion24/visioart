import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";

export const revalidate = 0; // disable

const navigation = [
	// { name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default async function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			{/* <Navigation /> */}
			<nav className="my-16 animate-fade-in">
				{/* Navigation components */}
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				visioart.io
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h1 className="text-sm text-zinc-500">COMING SOON</h1>
				<div className="w-3/4 mx-auto"> {/* Adjust the width as per your requirement */}
					<ArticleAboutUs />
				</div>
			</div>
		</div>
	);
}

function ArticleAboutUs() {
	return (
		<article>
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo metus quis
				suscipit fringilla. Fusce ac sem eget magna convallis pellentesque. Nulla vitae bibendum
				neque. Sed finibus iaculis feugiat. Aliquam non eros non augue viverra placerat vitae sit
				amet turpis. In hac habitasse platea dictumst.
			</p>
			{/* Additional content about us */}
		</article>
	);
}
