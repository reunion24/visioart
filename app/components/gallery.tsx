"use client";
import React from 'react';
import './gallery.css';
import Works from './works';

export interface Item {
    title: string;
    picture: string;
    link: string;
}

const Gallery = () => {
  
  const ObjectItems: Item[] = [
    {
      title: "STEREOTYPE & jacob.\nBACK AGAIN",
      picture: "1739672181-bbd164759f944be764c1275f7d8a1b4b300bcf778eba1b08543a3bb2160209fc-d?mw=1600&mh=900&q=70",
      link: "875195473"
    },
    {
      title: "...backagain.backagain...",
      picture: "1748980023-7f878edef28157bf0b75588bbb6f53b423ea79d20cef6e65c2db0e9f72fb2302-d?mw=1600&mh=900&q=70",
      link: "881407824"
    },
    {
      title: "[NOTHING004]",
      picture: "1748969030-97a94d85a4a08f7b0a6eafa06c65f5bafc0e1d7ba4ce445eaa8b3f2f414d3a7f-d?mw=1600&mh=900&q=70",
      link: "881399888"
    },
    {
      title: "STEREOTYPE\n\"LONDON\"",
      picture: "1724118929-da4c387b9893d3aff49471b060ed42a1d9b3ee200848d6275fd32dfbf372e4de-d?mw=1200&mh=900&q=70",
      link: "864549337"
    },
    {
      title: "TVOROZHNOE OZERO\nDREAM",
      picture: "1748970833-746b5ce2e4544187652b0681b5f40ded3be3f224947732963e41fa89323faed8-d?mw=1600&mh=900&q=70",
      link: "881400642"
    },
    {
      title: "\"AU-THEN-TIC\"",
      picture: "1748971656-c560593821160132d29215a747e07db4dfc5ec489b4c2303b2051561e10d7d96-d?mw=1700&mh=896&q=70",
      link: "832050120"
    }
  ];
  
  
  
  return (
    <div className="holster">
      <div className="visio-container x mandatory-scroll-snapping" dir="ltr">
        <div>
          <Works items={ObjectItems} />
        </div>
        <div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Gallery;
  