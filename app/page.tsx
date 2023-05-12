// ./app/page.tsx

import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { useClient } from "./components/useClient";

export const revalidate = 0; // disable

const Home: React.FC = () => {
  useClient(); // Mark this component as a client entry

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        <Navigation />
        <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            visioart.io
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div>
        <div className="my-16 text-center animate-fade-in">
          <div className="w-3/4 mx-auto text-white">
            <ArticleAboutUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

function ArticleAboutUs() {
  return (
    <article>
      <h2 className="text-white">About Us</h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo metus quis
        suscipit fringilla. Fusce ac sem eget magna convallis pellentesque. Nulla vitae bibendum
        neque. Sed finibus iaculis feugiat. Aliquam non eros non augue viverra placerat vitae sit
        amet turpis. In hac habitasse platea dictumst.
      </p>
    </article>
  );
}
