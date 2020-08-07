import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img
                alt={video.snippet.channelTitle}
                key={video.id.videoId}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
