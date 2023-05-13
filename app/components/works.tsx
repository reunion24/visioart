"use strict";
import React from 'react';
import './Works.css';

const Works = () => {
    // Array of Vimeo video IDs
    const vimeoIds = [
        '76979871', '254514255', '290177185', '150389663', '105701629', '332331153'
    ];

    // Generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div id="works" className="works-section">
            <h2 className="works-title">Works</h2>
            <div className="works-videos">
                {vimeoIds.map((id, index) => (
                    <div key={index} className="video-container" style={{backgroundColor: getRandomColor()}}>
                        <a href={`https://player.vimeo.com/video/${id}`} target="_blank" rel="noreferrer" className="video-link">
                            View Video {index + 1}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Works;
