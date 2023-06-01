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
        {/* <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/iGWAERQnbjE?controls=0" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" 
        allowFullScreen
        >

        </iframe> */}

        <Works />
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
