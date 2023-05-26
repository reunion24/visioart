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

  const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
<header className={`navbar-fixed-top ${scrolled ? 'scrolled' : ''}`}>

  
      <div className={`fixed inset-x-0  z-50`}>
        <div className="container2 flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('works')}
            >
              WORKS
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('about')}
            >
              ABOUT
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('contact')}
            >
              CONTACT
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('title')}
            >
              <ArrowUp className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;