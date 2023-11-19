"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlignJustify , X } from 'lucide-react';
import './style.css';
import VideoImage from '../components/videoImage';
import Navigation from '../components/nav';


const Home = () => {
  const [isBlackNavbar, setIsBlackNavbar] = useState(false);
  const worksRef = useRef(null);
  const firstBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'works' && entry.isIntersecting) {
            setIsBlackNavbar(true); // Turn navbar black when #works is intersected
          } else if (entry.target.className.includes('box') && entry.isIntersecting) {
            setIsBlackNavbar(false); // Turn navbar red when first box is intersected
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }
    if (firstBoxRef.current) {
      observer.observe(firstBoxRef.current);
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
      if (firstBoxRef.current) {
        observer.unobserve(firstBoxRef.current);
      }
    };
  }, []);





  return (

    
    <div className="holster">
      <div className={`navbar2 ${isBlackNavbar ? "black-navbar" : ""}`}>
      <Navigation />
    </div>
    <div className="visio-container x mandatory-scroll-snapping" dir="ltr">
    <div ref={firstBoxRef} className="box">1</div>
      <div ref={worksRef} id="works" className="box">2</div>
      <div id="about" className="box">3</div>
      <div id="contact" className="box">4</div>
      </div>
      </div>




  );
};

export default Home;
