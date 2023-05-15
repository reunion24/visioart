import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import ScrollToSlide from './scroll2slide'; // Import the ScrollToSlide component

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

  const handleWorksClick = () => {
    setDisableScrollToSlide(true);
    setTimeout(() => {
      setDisableScrollToSlide(false);
    }, disableDuration);
  };

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
            isIntersecting
              ? 'bg-zinc-900/0 border-transparent'
              : 'bg-zinc-900/500 border-zinc-800'
          }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <ScrollToSlide
              slideId="works_slide"
              disableScroll={disableScrollToSlide} // Pass the disableScroll prop
            >
              <Link
                to="works"
                spy={true}
                smooth={!disableScrollToSlide}
                offset={-70}
                duration={500}
                className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                onClick={handleWorksClick}
              >
                Works
              </Link>
            </ScrollToSlide>
            <Link
              to="about"
              spy={true}
              smooth={!disableScrollToSlide}
              offset={-70}
              duration={500}
              className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={!disableScrollToSlide}
              offset={-70}
              duration={500}
              className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            >
              Contact Us
            </Link>
            <Link
              to="title"
              spy={true}
              smooth={!disableScrollToSlide}
              offset={-70}
              duration={500}
              className="duration-200 text-zinc-300 hover:text-zinc-100 cursor-pointer"
            >
              <ArrowUp className="w-6 h-6 " />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
