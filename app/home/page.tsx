"use client";

import React, { useRef } from "react";
import Particles from "../components/particles";
import { Navigation} from "../components/nav";
import Contact from '../components/contact';
import AboutUs from '../components/about';
import Works from '../components/works';
import { useClient } from '../components/useClient';




export const revalidate = 0; // disable

const Home: React.FC = () => {
    const useClientRef = useClient();
    const worksRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

  const scrollToSlide = (slideId: string) => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div>
      <Navigation />
      <div id="works" className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        {/* <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div> */}
        <div className="my-16 text-center animate-fade-in" onClick={() => scrollToSlide('works')} ref={worksRef}>
          <div className="mx-auto text-white">
            <Works />
          </div>
        </div>
      </div>

      <div id="about" className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        {/* <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div> */}
        <div className="my-16 text-center animate-fade-in" onClick={() => scrollToSlide('about')} ref={aboutRef}>
          <div className="w-3/4 mx-auto text-white">
            <AboutUs />
          </div>
        </div>
      </div>

      <div id="contact" className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
        {/* <div className="absolute inset-0 -z-10">
          <Particles className="h-full w-full animate-fade-in" quantity={100} />
        </div> */}
        <div className="my-16 text-center animate-fade-in" onClick={() => scrollToSlide('contact')} ref={contactRef}>
          <div className="text-white">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
