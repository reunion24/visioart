"use client"

import React, { useState, useEffect } from "react";
import { handleSlide } from "./nav";
import Particles from "./particles";




export default function LogoComponent(props: { scrolled: any; childRef: React.RefObject<HTMLDivElement>}) {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (props.childRef.current) {
        const scrolled = props.childRef.current.scrollTop / (props.childRef.current.scrollHeight - props.childRef.current.clientHeight);
        const fastScroll = scrolled * 6;


      let newScroll = 0 + fastScroll;
      if (newScroll < 0) newScroll = 0;
      if (newScroll > 1) newScroll = 1;



      setScroll(1 - newScroll);
      }
    };
    if (props.childRef.current) {

    props.childRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (props.childRef.current) {

      props.childRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  var classes = "z-999 text-4xl text-transparent duration-1000 justify-end cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text"
  return (
    <div id="logo-nav" style={{ 'top': scroll * 43 + 'vh', 'scale': scroll * 1.1 + 1 }} className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        
        <div className=" inset-0 -z-10"></div>
        {/* <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div> */}
        <div>

        <h1 
            className={props.scrolled ? classes + " duration-200 cursor-pointer visio-bg" : classes + " bg-white"} 
            onClick={props.scrolled ? () => handleSlide('header') : undefined}
          >
            visioart.io
          </h1>
          <div className="hidden  h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        </div>
      </div>
    </div>
  );
};

