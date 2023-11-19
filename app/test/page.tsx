"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlignJustify , X } from 'lucide-react';
import './style.css';
import VideoImage from '../components/videoImage';
import Navigation from '../components/nav';


const Home = () => {
  const [isBlackNavbar, setIsBlackNavbar] = useState(false);
  const page1Ref = useRef(null); // Create a ref for the works div

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBlackNavbar(entry.isIntersecting); // Set state based on whether works div is intersecting
      },
      {
        root: null, // null means it uses the viewport
        threshold: 0.15, // Trigger when at least 10% of the target is visible
      }
    );

    if (page1Ref.current) {
      observer.observe(page1Ref.current); // Observe the works div
    }

    return () => {
      if (page1Ref.current) {
        observer.unobserve(page1Ref.current); // Clean up
      }
    };
  }, []);





  return (

    
    <div className="holster">
      <div className={`navbar2 ${isBlackNavbar ? "black-navbar" : ""}`}>
      <Navigation />
    </div>
    <div className="visio-container x mandatory-scroll-snapping" dir="ltr">
      <div ref={page1Ref} className="box">1</div>
      <div id="works" className="box">2</div>
      <div id="about" className="box">3</div>
      <div id="contact" className="box">4</div>
      </div>
      </div>




  );
};

export default Home;
