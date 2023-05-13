"use client";
import { Link } from 'react-scroll';
import React, { useEffect, useRef, useState } from 'react';
import { useClient } from './useClient';

export const Navigation: React.FC = () => {
    useClient();

    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
                    isIntersecting
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
                    </div>
                    {/* <Link
                        to="title"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="duration-200 text-zinc-300 hover:text-zinc-100 cursor-pointer"
                    >
                        <ArrowLeft className="w-6 h-6 " />
                    </Link> */}
                </div>
            </div>
        </header>
    );
};
