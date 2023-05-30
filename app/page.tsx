"use client"

import React, { useState, useEffect } from "react";
// import Link from 'next/link';

import Navigation from "./components/nav";
import Footer from "./components/footer";
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



  const [style, setStyle] = useState({ opacity: 1, transform: "scale(1)" });

  useEffect(() => {
    const navLogo = document.getElementById("logo_nav");
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const fastScroll = scrolled * 2; // Multiply by 5 to make opacity change faster
      // Ensure the value of opacity stays between 0 and 1
      let newOpacity = 1 - fastScroll;
      if (newOpacity < 0) newOpacity = 0;
      if (newOpacity > 1) newOpacity = 1;

      let newScale = 1 - 0.4 * (fastScroll * 3);
      if (newScale < 0.6) newScale = 0.6;
      if (newScale > 1) newScale = 1;

      const logoOffset = navLogo?.offsetTop;
      const logoHeight = navLogo?.offsetHeight;
      if (!navLogo)
        return null;
      let rect = navLogo.getBoundingClientRect();
      let y = rect.top;
      // console.log("nav_logo", logoOffset + logoHeight);
      console.log("main_title", document.getElementById('banner-logo-wrapper')?.offsetTop, y);


      setStyle({ opacity: newOpacity, transform: `scale(${newScale})` });
    };


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">

      <div className="navbar-fixed-top">
        <Navigation />
      </div >

      <div className="footer-fixed-bottom">
        <Footer />
      </div>

      <div className="slides">

        <section id="header" className="page1">
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">

            <div className="flex flex-col items-center justify-center h-full">
              <div className="absolute inset-0 -z-10">
                <Particles className="h-full w-full animate-fade-in" quantity={100} />
              </div>
              <div style={style} id="banner-logo-wrapper">
                <h1 className="z-10
               text-4xl 
               text-transparent 
               duration-1000 
               bg-white 
               justify-end 
               cursor-default 
               text-edge-outline 
               animate-title 
               font-display 
               sm:text-6xl 
               md:text-9xl 
               whitespace-nowrap 
               bg-clip-text">
                  visioart.io
                </h1>
              </div>
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            </div>
          </div>

        </section>

        <section id="works" className="page2">

          <Gallery />

          {/* <Carousrel /> */}

        </section>

        <section id="about" className="page3">
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
            <div className="my-16 text-center animate-fade-in">
              <div className="w-3/4 mx-auto text-white">
                <AboutUs />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page4">
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

