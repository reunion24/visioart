"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify , X } from 'lucide-react';
import './style.css';
import VideoImage from '../components/videoImage';
import Navigation from '../components/nav';


const Home = () => {


  const [isBlackNavbar, setIsBlackNavbar] = useState(false);

  const checkScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerHeight = window.innerHeight * 0.86; 
    setIsBlackNavbar(scrollPosition >= triggerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);







  return (

    
    <div className="holster">
      <div className={`navbar2 ${isBlackNavbar ? "black-navbar" : ""}`}>
         <Navigation />
    </div>
    <div className="visio-container x mandatory-scroll-snapping" dir="ltr">
      <div className="box">1</div>
      <div id="works" className="box">2</div>
      <div id="about" className="box">3</div>
      <div id="contact" className="box">4</div>
      </div>
      </div>




  );
};

export default Home;