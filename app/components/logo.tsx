"use client"

import React, { useState, useEffect } from "react";


export default function LogoComponent() {
    const [style, setStyle] = useState({ opacity: 1 });

    useEffect(() => {
      const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const fastScroll = scrolled * 6;
        // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // const isScrolled = scrollTop > window.innerHeight * 0.5; // Change the value here

        let newOpacity = 0 + fastScroll;
        if (newOpacity < 0) newOpacity = 0;
        if (newOpacity > 1) newOpacity = 1;
  
       
  
        setStyle({ opacity: newOpacity });
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="absolute inset-0 -z-10"></div>
        <div style={style} >
          <h1 className="z-999 text-4xl text-transparent duration-1000 bg-white justify-end cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text">
            visioart.io
          </h1>
        </div>
      </div>
    </div>
  );
};

