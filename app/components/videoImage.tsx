import React from 'react';
import './videoimage.css';

type VideoImageProps = {
    item: {
        title: string;
        picture: string;
        link: string;
    };
    handleStartButtonClick: (link: string) => void;
};


    function VideoImage(props: VideoImageProps) {
        const { item, handleStartButtonClick } = props;

        return (
            <div className="video-container">
                {/* Use the onClick handler to call handleStartButtonClick with the item's link */}
                <button id="js-startbtn" className="video-image" onClick={() => handleStartButtonClick(item.link)}>
                    <div className="video-image"
                        style={{
                            backgroundImage: `url(https://i.vimeocdn.com/video/${item.picture})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="video-overlay">
                            <span className='video-link' style={{ whiteSpace: "pre-line" }}>
                                {item.title}
                            </span>
                        </div>
                    </div>
                </button>
            </div>
        );
    }
    
    export default VideoImage;