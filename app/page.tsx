"use client";

import React, { useCallback, useRef } from "react";
// import Link from 'next/link';
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { useClient } from "./components/useClient";
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Eye } from "lucide-react";
import Contact from './components/contact';
import AboutUs from './components/about';
import Works from './components/works';
import { Link } from 'react-scroll';





export const revalidate = 0; // disable

const Home: React.FC = () => {
  const useClientRef = useClient();
  const title_slideRef = useRef(null);
  const works_slideRef = useRef(null);
  const about_slideRef = useRef(null);
  const contact_slideRef = useRef(null);

  const ScrollToSlide = (slideId: string) => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  };


  // const Home: React.FC = () => {
  //   const scrollToSlide = useCallback((slideId: string) => {
  //     const slide = document.getElementById(slideId);
  //     if (slide) {
  //       slide.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, []);


  return (
    <div>
      <div id="title_slide" className="slide" onClick={() => ScrollToSlide('title_slide')}>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
            <Navigation />
          <div className="flex flex-col items-center justify-center h-full">
            <div className="absolute inset-0 -z-10">
              <Particles className="h-full w-full animate-fade-in" quantity={100} />
            </div>
            <h1 id="title" className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
              visioart.io
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
              <h1 className="text-sm text-zinc-500 ">
                COMING SOON
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="works_slide" className="slide" onClick={() => ScrollToSlide('works_sldie')}>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="works" className="mx-auto text-white">
              <Works />
            </div>
          </div>
        </div>
      </div>

      <div id="about_slide" className="slide" onClick={() => ScrollToSlide('about_slide')}>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="about" className="w-3/4 mx-auto text-white">

              <AboutUs />
            </div>
          </div>
        </div>
      </div>
      <div id="contact_slide" className="slide" onClick={() => ScrollToSlide('contact_slide')}>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="contact" className="text-white">
              <Contact />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;
