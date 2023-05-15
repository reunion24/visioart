"use client";

import React, { useState } from "react";
import { Navigation } from "../components/nav";
import Contact from "../components/contact";
import AboutUs from "../components/about";
import Works from "../components/works";
import ScrollToSlide from "../components/scroll2slide";

export default function Home() {
  const [disableScrollToSlide, setDisableScrollToSlide] = useState(false);
  const disableDuration = 1000; // 1 second

  const handleWorksClick = () => {
    setDisableScrollToSlide(true);
    setTimeout(() => {
      setDisableScrollToSlide(false);
    }, disableDuration);
  };

  return (
    <div>
                <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">

      <Navigation />
      </div>
      <ScrollToSlide slideId="works_slide" disableScroll={disableScrollToSlide}>
        <div className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="my-16 text-center animate-fade-in">
            <div className="mx-auto text-white">
              <Works />
            </div>
          </div>
        </div>
      </ScrollToSlide>
      <ScrollToSlide slideId="about_slide" disableScroll={disableScrollToSlide}>
        <div className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="my-16 text-center animate-fade-in">
            <div className="w-3/4 mx-auto text-white">
              <AboutUs />
            </div>
          </div>
        </div>
      </ScrollToSlide>
      <ScrollToSlide slideId="contact_slide" disableScroll={disableScrollToSlide}>
        <div className="slide flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="my-16 text-center animate-fade-in">
            <div className="text-white">
              <Contact />
            </div>
          </div>
        </div>
      </ScrollToSlide>
    </div>
  );
}
