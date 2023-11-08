"use client";
import React from 'react';
import './gallery.css';
import Works from './works';

const Gallery = () => {

  // const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];


  return (
    <div className="holster">
      <div className="visio-container x mandatory-scroll-snapping" dir="ltr">
        <div>
          <Works />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
