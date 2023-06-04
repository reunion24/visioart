"use client"
import React, { useState } from 'react';
import './works.css';
import VideoImage from './videoImage';

const Works = () => {
    // Array of Vimeo video IDs
    const vimeoIds = [
        '832050120', '254514255', '290177185', '150389663', '105701629', '332331153'
    ];

    // Array of image filenames
    const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const handleStartButtonClick = (id: string) => {
        setIsModalVisible(true);
        setCurrentVideoId(id);
    };

    const handleModalCloseClick = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="works-section">
            <div className="works-videos">
                {vimeoIds.map((id, index) => (
                    <VideoImage 
                        key={index} 
                        index={index} 
                        id={id} 
                        handleStartButtonClick={() => handleStartButtonClick(id)}
                    />
                ))}
            </div>
            {isModalVisible && (
                <div className="modal">
                    <iframe className="popup-video" width="80%" height="80%"  src={`https://player.vimeo.com/video/${currentVideoId}`} frameBorder="0" allowFullScreen></iframe>
                    <button className="modal-close js-modal-close" onClick={handleModalCloseClick}>X</button>
                </div>
            )}
        </div>
    );
}

export default Works;
