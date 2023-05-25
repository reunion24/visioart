import React from 'react';
import './works.css';



type VideoImageProps = {
    index: number;
    id: string;
  };

const imageFilenames = ['work1.jpg', 'work2.PNG', 'work3.PNG', 'work4.PNG', 'work5.PNG', 'work6.jpg'];

function VideoImage(props: VideoImageProps) {

    const {index, id} = props;

    return <div className="video-container">
        <a className="video-image" href={`https://player.vimeo.com/video/${id}`} target="_blank" rel="noreferrer">
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
        </a>
    </div>;
}

export default VideoImage;