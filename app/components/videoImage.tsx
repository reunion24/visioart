import React from 'react';
import './works.css';

type VideoImageProps = {
    index: number;
    id: string;
    handleStartButtonClick: () => void;
};

const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];

function VideoImage(props: VideoImageProps) {
    const { index, id, handleStartButtonClick } = props;

    return (
        <div className="video-container">
            <button id="js-startbtn" className="video-image" onClick={handleStartButtonClick}>
                <div className="video-image"
                    style={{
                        backgroundImage: `url(works_pics/${imageFilenames[index]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="video-overlay">
                        <span className='video-link'>
                            View Video {index + 1}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default VideoImage;
