import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="videos-left-column">
            <iframe width="900" height="600" src={videoSrc} frameBorder="0"></iframe>
            <h1>{video.snippet.title}</h1>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;