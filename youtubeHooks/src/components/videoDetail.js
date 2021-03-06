import React from "react";
const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <div class='ui segment'>
                <div class='ui active loader'></div>
                <p></p>
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='ui embed'>
                <iframe
                    title='my player'
                    src={videoSrc}
                    allow='autoplay; fullscreen'
                    allowfullscreen
                />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;
