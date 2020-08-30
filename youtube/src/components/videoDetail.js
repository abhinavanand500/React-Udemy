import React from "react";
const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <div class="ui segment">
                <div class="ui active loader"></div>
                <p></p>
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    allowFullScreen="true"
                />
            </div>
            <br />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {video.snippet.description}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
