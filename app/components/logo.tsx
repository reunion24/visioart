"use client"

import React, { useState, useEffect } from "react";
import { handleSlide } from "./nav";


export default function LogoComponent(props: { scrolled: any; }) {
    const [scroll, setScroll] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const fastScroll = scrolled * 6;
     

        let newScroll = 0 + fastScroll;
        if (newScroll < 0) newScroll = 0;
        if (newScroll > 1) newScroll = 1;
  
       
  
        setScroll(1-newScroll);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
   var classes = "z-999 text-4xl text-transparent duration-1000 justify-end cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text"
  return (
    <div id="logo-nav" style={{'top':  scroll * 43 + 'vh', 'scale': scroll * 1.1 + 1}} className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className=" inset-0 -z-10"></div>
        <div>
          <h1 className={ props.scrolled ? classes + " visio-bg": classes + " bg-white" }>
          <button className="duration-200 cursor-pointer" onClick={() => handleSlide('header')}>visioart.io</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

