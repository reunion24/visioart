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
    <div>
      <div
        className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
              visioart.io
            </h1>
          </div>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={-1} /> {/* Set quantity to -1 */}
      </div>
      <div
        className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <div className="my-16 text-center animate-fade-in">
            <div className="w-3/4 mx-auto text-white"> {/* Adjust the width and add text-white class */}
              <ArticleAboutUs />
            </div>
          </div>
        </div>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={-1} /> {/* Set quantity to -1 */}
      </div>
    </div>
  );
}

function ArticleAboutUs() {
  return (
    <article>
      <h2 className="text-white">About Us</h2> {/* Add text-white class */}
      <p className="text-white"> {/* Add text-white class */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo metus quis
        suscipit fringilla. Fusce ac sem eget magna convallis pellentesque. Nulla vitae bibendum
        neque. Sed finibus iaculis feugiat. Aliquam non eros non augue viverra placerat vitae sit
        amet turpis. In hac habitasse platea dictumst.
      </p>
      {/* Additional content about us */}
    </article>
  );
}
