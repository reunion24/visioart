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
'Kaycyy & Sign crushes motorist\nBRUISED',
'Sam Silver, informal. & Babsy.\nWE IN LONDON',
'PXG SS25 - CAMPAIGN',
'STORIES THAT STAY - ELKONIN\nM-Gallery',


'STEREOTYPE & jacob.\nBACK AGAIN',
'STEREOTYPE & YANGHSI\nMIND / STEAL MY SIGHT',
'Kaycyy & Sign Crushes Motorist\nSADDEST TRUTH',
'Kaycyy\nALL IN VEIN',


'STEREOTYPE & GRACE BUKUNMI\nASHRA’A',
'Mane Choice x Shenseea - CAMPAIGN',
'FABRIC TO DIE IN',
'...backagain.backagain...'
];

const pictures = [
  '/works_covers/BACK_AGAIN_COVER.jpg',
  'https://i.vimeocdn.com/video/1748980023-7f878edef28157bf0b75588bbb6f53b423ea79d20cef6e65c2db0e9f72fb2302-d',
  '/works_covers/NOTHING_004_COVER.jpg',
  '/works_covers/LONDON_COVER.jpg',
  '/works_covers/DREAM_COVER.jpg',
  '/works_covers/AUTHENTIC_COVER.jpg',
  '/works_covers/NOTHING_003_COVER.jpg',
  '/works_covers/COUREUR_COVER.jpg'
];

const links = [
'1078917201', 
'1078789296', 
'1033280727', 
'989511966',
 
'875195473', 
'993614153', 
'1032488205', 
'1059411443',

'921769339',
'1053264395',
'917227537',
'881407824'
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