import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, CloudCog } from 'lucide-react';
import '../style.css';
import LogoComponent from './logo';

const handleSlide = (slideId: string) => {
  console.log(slideId);
  const slide = document.getElementById(slideId);
  if (slide) {
    slide.scrollIntoView({ behavior: 'smooth' });
  }
};


const Navigation = (props: {childRef: React.RefObject<HTMLDivElement>}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (props.childRef.current) {

      const scrollHeight = props.childRef.current.scrollHeight - props.childRef.current.clientHeight;
      const scrollTop = props.childRef.current.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      const isScrolled = scrollTop > props.childRef.current.clientHeight * 0.87; // Change the value here
      setScrolled(isScrolled);
      setScrollProgress(progress);
      }
    };


    if (props.childRef.current) {

    props.childRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (props.childRef.current) {

        props.childRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  return (
    <header className={`navbar-fixed-top  ${scrolled ? 'scrolled' : ''}`}>
      <div className="visio-logonav">
        <LogoComponent scrolled={ scrolled } childRef={ props.childRef }/>
      </div>
      <div className={`fixed inset-x-0 z-999`}>
        <div className="container animate-fade-in flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="navbar-rest">
          <div className="flex justify-between gap-8">
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('works')}>
              WORKS
            </button>
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('about')}>
              ABOUT
            </button>
            <button className="duration-200 cursor-pointer" onClick={() => handleSlide('contact')}>
              CONTACT
            </button>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
export { handleSlide };