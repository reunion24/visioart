"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import Player from '@vimeo/player';
import './verticalworks.css';

const titles = [
    'Video 1',
    'Video 2',
    'Video 3',
    'Video 4',
    'Video 5',
    'Video 6',

    'Video 7',
    'Video 8',
    'Video 9',
    'Video 10',
    'Video 11',
    'Video 12',

    'Video 13',
    'Video 14',
    'Video 15',
    'Video 16',
    'Video 17',
    'Video 18'
];

const links = [
    '889240821',
    '1095487597',
    '1095482231',
    '1095487642',
    '908013727',
    '1095482287',

    '1095487634',
    '1095482274',
    '1034696269',
    '1056696558',
    '1095482244',
    '1056696261',

    '1095487655',
    '1095482312',
    '1095488289',
    '1095482330',
    '1095487624',
    '1095488279'
];

const ObjectItems = titles.map((title, index) => ({
    title,
    link: links[index]
}));

const VerticalWorks = () => {
    const [index, setIndex] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);
    const itemsPerPage = 6;
    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

    const handleNext = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.offsetWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.offsetWidth;
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const clientWidth = container.clientWidth;
            const scrollWidth = container.scrollWidth;
            // Debug logging
            console.log('scrollLeft:', scrollLeft);
            console.log('clientWidth:', clientWidth);
            console.log('scrollWidth:', scrollWidth);
            setShowPrev(scrollLeft > 17);
            setShowNext(scrollLeft + clientWidth < scrollWidth - 5);
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll(); // initial check

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let activePlayer: Player | null = null;

        iframeRefs.current.forEach((iframe, i) => {
            if (!iframe) return;
            const player = new Player(iframe);
            const container = iframe.closest('.vworks-video-container');

            if (container) {
                container.classList.add('vworks-clickable');
                container.addEventListener('click', () => {
                    player.getMuted().then((muted: boolean) => {
                        if (muted) {
                            if (activePlayer && activePlayer !== player) {
                                activePlayer.setMuted(true);
                            }
                            player.setVolume(1).then(() => {
                                player.setMuted(false);
                                activePlayer = player;
                            });
                        } else {
                            player.setMuted(true);
                            if (activePlayer === player) {
                                activePlayer = null;
                            }
                        }
                    });
                });
            }
        });
    }, []);

    return (
        <div className="vworks-video-wrapper">
            <div className="vworks-gallery-container" ref={containerRef}>
                <div className="vworks-gallery-track">
                    {ObjectItems.map((item, i) => (
                        <div className="vworks-video-container" key={i}>
                            <div className="vworks-iframe-wrapper">
                                <iframe
                                    ref={el => iframeRefs.current[i] = el}
                                    src={`https://player.vimeo.com/video/${item.link}?autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&background=1`}
                                    title={item.title}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                            </div>
                            <div className="vworks-video-overlay">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="vworks-gallery-nav-wrapper">
                {showPrev && (
                    <button className="vworks-gallery-nav left" onClick={handlePrev}>←</button>
                )}
                {showNext && (
                    <button className="vworks-gallery-nav right" onClick={handleNext}>→</button>
                )}
            </div>
        </div>
    );
};

export default VerticalWorks;