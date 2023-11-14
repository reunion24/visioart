"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify , X } from 'lucide-react';
import './works.css';
import VideoImage from './videoImage';


interface Item {
  title: string;
  picture: string;
  link: string;
}

const titles = [
  'STEREOTYPE & jacob.\nBACK AGAIN',
  '...backagain.backagain...',
  '[NOTHING004]',
  'STEREOTYPE\n"LONDON"',
  'TVOROZHNOE OZERO\nDREAM',
  '"AU-THEN-TIC"',
  '[NOTHING003]',
  'COUREUR'
];

const pictures = [
  '1739672181-bbd164759f944be764c1275f7d8a1b4b300bcf778eba1b08543a3bb2160209fc-d',
  '1748980023-7f878edef28157bf0b75588bbb6f53b423ea79d20cef6e65c2db0e9f72fb2302-d',
  '1748969030-97a94d85a4a08f7b0a6eafa06c65f5bafc0e1d7ba4ce445eaa8b3f2f414d3a7f-d',
  '1724118929-da4c387b9893d3aff49471b060ed42a1d9b3ee200848d6275fd32dfbf372e4de-d',
  '1748970833-746b5ce2e4544187652b0681b5f40ded3be3f224947732963e41fa89323faed8-d',
  '1748971656-c560593821160132d29215a747e07db4dfc5ec489b4c2303b2051561e10d7d96-d',
  '1748973356-449f851630c80f7076696b81b8e7d73c10d91258581ef58a98efd6a098ba2331-d',
  '1748969714-cf4ffa5beb905f39d388c544570d7d408a305fce05b383413ac21a34f4113bc2-d'
];

const links = [
  '875195473', '881407824', '881399888', '864549337', '881400642', '832050120', '881401999', '881400684'
];

const ObjectItems: Item[] = titles.map((title, index) => ({
  title,
  picture: pictures[index],
  link: links[index],
}));

const Works = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerSlide = (windowWidth ?? 1000) > 600 ? 4 : 3;

  const slides = [];
  for (let i = 0; i < ObjectItems.length; i += itemsPerSlide) {
    slides.push(ObjectItems.slice(i, i + itemsPerSlide));
  }

  const handleStartButtonClick = (link: string) => {
    setIsModalVisible(true);
    setCurrentVideoId(link);
  };

  const handleModalCloseClick = () => {
    setIsModalVisible(false);
  };

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="holster">
    <div className="visio-container">
      {slides.map((slideItems, index) => (
        <div key={index} className="slide">
          {slideItems.map((item, itemIndex) => (
            // Pass the item object to the VideoImage component
            <VideoImage 
              key={itemIndex} 
              item={item}
              handleStartButtonClick={() => handleStartButtonClick(item.link)}
            />
          ))}
        </div>
        ))}
      </div>
      {isModalVisible && (
        <div className="modal" onClick={handleModalCloseClick}>
          <div className="modal-content" onClick={handleModalContentClick}>
            <iframe
              className="popup-video"
              width="90%"
              height="90%"
              src={`https://player.vimeo.com/video/${currentVideoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button className="modal-close" onClick={handleModalCloseClick}>
              <X size={24} /> {/* Size is optional, adjust as needed */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;