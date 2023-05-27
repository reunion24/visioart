"use client";
import React from 'react';
import './gallery.css';

const Gallery = () => {

  const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];


  return (
    <div className="holster w-screen">
      <div className="container x mandatory-scroll-snapping" dir="ltr">
        <div>
         1
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
}

export default Gallery;
