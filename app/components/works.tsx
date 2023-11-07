"use client";
import React, { useState, useEffect } from 'react';
import './works.css';
import VideoImage from './videoImage';
import { X } from 'lucide-react';


const Works = () => {
    // Array of Vimeo video IDs
    const vimeoIds = [
        '875195473', '254514255', '290177185', '150389663', '105701629', '332331153'
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
