"use client";

import React, { useState, useCallback, useRef } from "react";
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
import ScrollToSlide from "./components/scroll2slide";






export default function Home() {
  const [disableScrollToSlide, setDisableScrollToSlide] = useState(false);
  const disableDuration = 1000; // 1 second

  const handleWorksClick = () => {
    setDisableScrollToSlide(true);
    setTimeout(() => {
      setDisableScrollToSlide(false);
    }, disableDuration);
  };


  return (
    <div>
      <ScrollToSlide slideId="title_slide">

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

      </ScrollToSlide>
      <ScrollToSlide slideId="works_slide">
        {/* <div className="mt-160"> */}
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
      </ScrollToSlide>

      <ScrollToSlide slideId="about_slide">
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
      </ScrollToSlide>

      <ScrollToSlide slideId="contact_slide">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="contact" className="text-white bg-gradient-to-tl ">
              <Contact />
            </div>
          </div>

        </div>
      </ScrollToSlide>
    </div >

  );
};