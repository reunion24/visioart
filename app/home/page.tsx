"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import Footer from '../components/footer';
import './style.css';

const Home = () => {


  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    // Check that 'x' is not null before accessing its properties
    if (x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  };
  

  return (
      <>
        <div className="topnav" id="myTopnav">
          <Link href="#home">
            <span className="active">
              Home
            </span>
          </Link> 
          <Link href="#news">News</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#about">About</Link>
          {/* Update the onClick to call the myFunction method */}
          <Link href="#/"><span className="icon" onClick={myFunction}>
          <AlignJustify />
            </span>
          </Link>
          
        </div>
  
        <div style={{ paddingLeft: '16px' }}>
          <h2>Responsive Topnav Example</h2>
          <p>Resize the browser window to see how it works.</p>
        </div>
  
        {/* Footer would go here if you wanted to include it */}
        {/* <Footer /> */}
      </>
    );
  };
  

export default Home;