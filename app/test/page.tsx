"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlignJustify , X } from 'lucide-react';
import './style.css';
import VideoImage from '../components/videoImage';
import Navigation from '../components/nav';


const Home = () => {
  const childRef = useRef<HTMLDivElement>(null);
   const [scrollPosition, setScrollPosition] = useState(0);
   const handleScroll = () => {
    if (childRef.current) {
      const currentPosition = childRef.current.scrollTop;
      setScrollPosition(currentPosition);
      console.log('Scroll position:', currentPosition);
    }
  };

  useEffect(() => {
    const childElement = childRef.current;
    if (childElement) {
      childElement.addEventListener('scroll', handleScroll);

      // Cleanup
      return () => {
        childElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);


  return (

    
    <div className="holster">
      <div className={`navbar2`}>
      <Navigation childRef={childRef}/>
    </div>
    <div ref={childRef} className="visio-container x mandatory-scroll-snapping">
    <div className="box"></div>
      <div id="works" className="box">2</div>
      <div id="about" className="box">3</div>
      <div id="contact" className="box">4</div>
      </div>
      </div>




  );
};

export default Home;
