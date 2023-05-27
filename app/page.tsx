
import React, { useState, useCallback, useRef } from "react";
// import Link from 'next/link';

import Navigation from "./components/nav";
import { useClient } from "./components/useClient";
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Eye } from "lucide-react";
import Slides from "./components/slides";
import Slide from "./components/scroll2slide";
import './style.css';

import Particles from "./components/particles";

import Contact from "./components/contact";
import AboutUs from "./components/about";
import Works from "./components/works";
import { Link } from 'react-scroll';
import Gallery from "./components/gallery";




export default function Home() {
  
  return (
    <div className="main">

      <div className="navbar-fixed-top">
        <Navigation />
      </div >

      <div className="slides">

        <section className="page1">
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">

            <div className="flex flex-col items-center justify-center h-full">
              <div className="absolute inset-0 -z-10">
                <Particles className="h-full w-full animate-fade-in" quantity={100} />
              </div>
              <h1 id="title" className="z-10 text-4xl text-transparent duration-1000 bg-white justify-end cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                visioart.io
              </h1>
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>
          </div>
        </section>

        <section className="page2">
    
              <Gallery />
              {/* <Carousrel /> */}
            
        </section>

        <section className="page3">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="my-16 text-center animate-fade-in">
            <div className="w-3/4 mx-auto text-white">
              <AboutUs />
            </div>
          </div>
        </div>
        </section>

        <section className="page4">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="my-16 text-center animate-fade-in">
            <div className="w-3/4 mx-auto text-white">
              <Contact />
            </div>
          </div>
        </div>
        </section>



      </div>
    </div >
  );
};

