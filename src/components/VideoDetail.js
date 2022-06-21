import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div>
                <iframe src={videoSrc} frameborder="0"></iframe>
            </div>
            {video.snippet.title}
            {video.snippet.description}
        </div>
    );
}

export default VideoDetail;