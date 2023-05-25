"use client";

import React, { useState, useCallback, useRef } from "react";
// import Link from 'next/link';

import { Navigation } from "./components/nav";
import { useClient } from "./components/useClient";
import { allProjects } from "contentlayer/generated";
import { Card } from "./components/card";
import { Eye } from "lucide-react";
import Slides from "./components/slides";
import Slide from "./components/scroll2slide";
import './style.css';

import Particles from "./components/particles";
import Contact from "./components/contact";
import AboutUs from "./components/about";
import Works from "./components/works";
import { Link } from 'react-scroll';

export default function Home() {
  const [disableSlide, setDisableSlide] = useState(false);
  const disableDuration = 1000; // 1 second

  const handleWorksClick = () => {
    setDisableSlide(true);
    setTimeout(() => {
      setDisableSlide(false);
    }, disableDuration);
  };


  return <div className="main">

    <div className="header">

      <h1>Navigation</h1>
    </div >

    <div className="slides">

      <section className="title">
        <div className="flex">
          <h1>visioart</h1>
        </div>
      </section>

      <section className="works">
        <div className="holster">
          <div className="container x mandatory-scroll-snapping" dir="ltr">
            <div>X Mand. LTR</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="flex">
        </div>
      </section>



    </div>

  </div >
};