"use strict";
import React from 'react';
import './works.css';
import VideoImage from './videoImage';

const Works = () => {
    // Array of Vimeo video IDs
    const vimeoIds = [
        '76979871', '254514255', '290177185', '150389663', '105701629', '332331153'
    ];

    // Array of image filenames
    const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];

    return (
        <div id="works" className="works-section">

            <div className="works-videos">
                {vimeoIds.map((id, index) => (
                    <VideoImage key={index} index={index} id={id} />
                ))}
            </div>
        </div>
    );

}

export default Works;
