import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { ArrowUp, CloudCog } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [disableScrollToSlide, setDisableScrollToSlide] = useState(false);
  const disableDuration = 1000; // 1 second

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleSlide = (slideId: string) => {
    console.log(slideId);
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header ref={ref}>
      <div
          className={`fixed inset-x-0 top-0 z-50 bg-white duration-200 border-b 
        
          ${
            isIntersecting
          // false
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500 '
          }
        `
      }
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('works')}
            >
              WORKS
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('about')}
            >
              ABOUT
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('contact')}
            >
              CONTACT
            </button>
            <button
              className="duration-200 text-black hover:text-zinc-100 cursor-pointer"
              onClick={() => handleSlide('title')}
            >
              <ArrowUp className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
