"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import './style.css';


const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

const Home = () => {
  // Initialize windowWidth as undefined and declare it can be a number or undefined
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Set the initial value for windowWidth if window is defined
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    // Handle window resize
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the number of items per slide based on window width
  // Default to 4 items per slide if windowWidth is not set
  const itemsPerSlide = windowWidth ? (windowWidth > 600 ? 4 : 3) : 4;

  // Divide items into slides
  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="holster">
      <div className="visio-container">
        {slides.map((slideItems, index) => (
          <div key={index} className="slide">
            {slideItems.map((item, itemIndex) => (
              <div key={itemIndex} className="item">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  

/* <div className="grid-container">
  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>
  </div> */
    );
};
  

export default Home;