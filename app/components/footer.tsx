"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { ArrowUp, CloudCog } from 'lucide-react';
import '../style.css';

  const handleSlide = (slideId: string) => {
    console.log(slideId);
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  }

  const Footer = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / scrollHeight) * 100;
        const isScrolled = scrollTop > window.innerHeight * 0.86; // Change the value here
        setScrolled(isScrolled);
        setScrollProgress(progress);
      };
  
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
<header className={`footer-fixed-bottom ${scrolled ? 'scrolled' : ''}`}>

      <div className={`fixed bottom-0 item-center inset-x-0 z-50`}>
        <div className="container2 flex flex-row-reverse items-center justify-center p-3 mx-auto">
          <div className="flex justify-center">
            <button
              className="duration-200 cursor-pointer"
              onClick={() => handleSlide('header')}
            >
              <ArrowUp className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
