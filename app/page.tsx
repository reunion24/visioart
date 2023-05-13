import React from "react";
import Link from 'next/link';
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { useClient } from "./components/useClient";
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Article } from "./projects/article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Contact from './components/contact';
import AboutUs from './components/about';
import Works from './components/works';

export const revalidate = 0; // disable

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        <Navigation />
          {/* <Link href="/about-us"><a><AboutUs /></a></Link>
          <Link href="/contact"><a><ContactUs /></a></Link>
          <Link href="/works"><a><Works /></a></Link>
        </Navigation> */}
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
          <div className=" mx-auto text-white">
            <Works />
          </div>
        </div>   
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div>
        <div className="my-16 text-center animate-fade-in">
          <div className="w-3/4 mx-auto text-white">
            <AboutUs />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div>
        <div className="my-16 text-center animate-fade-in">
          <div className=" mx-auto text-white">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
