"use client";
import { Link } from 'react-scroll';
import React, { useEffect, useRef, useState } from 'react';
// import { useClient } from './useClient';
import { ArrowUp } from "lucide-react";
import ScrollToSlide from "../page";


export const Navigation: React.FC = () => {
    const [isScrollToSlideEnabled, setScrollToSlideEnabled] = useState(true);

    const disableScrollToSlide = () => {
        setScrollToSlideEnabled(false);
    };



    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);


    useEffect(() => {
        const enableScrollToSlide = () => {
            setScrollToSlideEnabled(true);
        };

        window.addEventListener("scroll", enableScrollToSlide);

        return () => {
            window.removeEventListener("scroll", enableScrollToSlide);
        };
    }, []);





    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${isIntersecting
                    ? "bg-zinc-900/0 border-transparent"
                    : "bg-zinc-900/500  border-zinc-800 "
                    }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                            onClick={disableScrollToSlide}
                        >
                            Works
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="duration-200 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="title"
                            spy={true}
                            smooth={true}
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
