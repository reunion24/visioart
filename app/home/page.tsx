"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import './style.css';

const Home = () => {


  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  

  return (
      <>
      <div className={`topnav ${isActive ? 'responsive' : ''}`} id="myTopnav">
        
          <Link href="#home">
            <span className="active">
              Home
            </span>
          </Link> 
          <Link href="#news"><span>News</span></Link>
          <Link href="#contact"><span>Contact</span></Link>
          <Link href="#about"><span>About</span></Link>
          <button className="icon" onClick={toggleNav}>
          <span>          <AlignJustify />
</span>
        </button>
          
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