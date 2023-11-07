"use client";
import React, { useState, useEffect } from 'react';
import './works.css';
import VideoImage from './videoImage';
import { X } from 'lucide-react';


const Works = () => {
    // Array of Vimeo video IDs
    const vimeoIds = [
        '875195473', '881407824', '881399888', '864549337', '881400642', '832050120'
    ];

    // Array of image filenames
    const imageFilenames = [
        'url(&quot;https://i.vimeocdn.com/video/1739672231-bbd164759f944be764c1275f7d8a1b4b300bcf778eba1b08543a3bb2160209fc-d?mw=1600&mh=900&q=70&quot', 
        'work2.PNG', 
        'work3.PNG', 
        'work4.PNG', 
        'work5.PNG', 
        'work6.jpg'
];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const handleStartButtonClick = (id: string) => {
        setIsModalVisible(true);
        setCurrentVideoId(id);
    };

    const handleModalCloseClick = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleModalCloseClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component is unmounted
        window.scrollTo(0, 0);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleModalContentClick = (event: React.MouseEvent) => {
        // Stop the propagation of the click event to prevent the modal from closing when the content is clicked
        event.stopPropagation();
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
                <div className="modal" onClick={handleModalCloseClick}>
                    <div onClick={handleModalContentClick}>
                        <iframe className="popup-video" width="90%" height="90%" src={`https://player.vimeo.com/video/${currentVideoId}`} frameBorder="0" allowFullScreen></iframe>
                        <button className="modal-close js-modal-close" onClick={handleModalCloseClick}><X /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Works;
