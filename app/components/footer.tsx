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
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > window.innerHeight;
        setScrolled(isScrolled);
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