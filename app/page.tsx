"use client";

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
import { useEffect } from 'react';

import Contact from "./components/contact";
import AboutUs from "./components/about";
import Works from "./components/works";
import { Link } from 'react-scroll';




export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="main">

      <div className="navbar-fixed-top">
        <Navigation />
      </div >

      <div className="slides">

        <section className="title">
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

        <section className="works">
          <div className="holster">
            <div className="container x mandatory-scroll-snapping" dir="ltr">
              <div>X Mand. LTR</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="flex">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ligula quis lacus interdum, ut consectetur sapien feugiat. Integer eu justo eu risus commodo eleifend nec a est. Nullam ultrices, ligula ac tincidunt tincidunt, lorem arcu tincidunt purus, a efficitur libero ligula nec dui. Sed ultricies massa eu nisi consectetur, id eleifend neque efficitur. Fusce dapibus efficitur turpis, vitae hendrerit nibh mollis sed. Ut ullamcorper fringilla libero vitae consectetur.</p>
          </div>
        </section>



      </div>
    </div >
  );
};

