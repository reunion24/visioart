"use client"

import React, { useState, useEffect } from "react";
// import Link from 'next/link';

import Navigation from "./components/nav";
import Footer from "./components/footer";
import { useClient } from "./components/useClient";
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Eye } from "lucide-react";
import Slide from "./components/scroll2slide";
import './style.css';

import Particles from "./components/particles";

import Contact from "./components/contact";
import AboutUs from "./components/about";
import Works from "./components/works";
import { Link } from 'react-scroll';



export default function Home() {
  const viewportHeight = useViewportHeight();




  const [style, setStyle] = useState({ opacity: 1, transform: "scale(1)" });
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navLogo = document.getElementById("logo-nav");
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
    // window.onbeforeunload = () => {
    //   const logo = document.getElementById("logo-nav");
    //   if(logo) {
    //     setHideLogo(true);
    //     logo.hidden = true;
    //   }
    //   window.scrollTo(0, 0);

    // }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">

      <div className="navbar-fixed-top">
        { !hideLogo ? <Navigation /> : null}
      </div >

      {/* <div className="footer-fixed-bottom">
        <Footer />
      </div> */}

      <div className="slides">

        <section id="header" className="page1" style={{ height: `0.86*${viewportHeight}px` }}>
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative" 
          >

            <div className="flex flex-col items-center justify-center h-full">
            </div>
          </div>

        </section>

        <section id="works" className="page2" style={{ height: `0.86*${viewportHeight}px` }}>
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <Works />
          </div>
        </section>

        <section id="about" className="page3" style={{ height: `0.86*${viewportHeight}px` }}>
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative"
          >
            <div className="my-16 text-center animate-fade-in">
              <div className="w-3/4 mx-auto text-white">
                <AboutUs />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page4" style={{ height: `0.86*${viewportHeight}px` }}>
          <div className="flex flex-col items-center justify-center w-screen h-screen
          overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative"
          >
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

function useViewportHeight() {
  // Initialize state with undefined, so it doesn't break server-side rendering
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : undefined);

  useEffect(() => {
    // Ensure window is defined
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setViewportHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Set the initial height
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return viewportHeight;
}