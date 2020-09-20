import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./videoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("songs");
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    return (
        <div className='container'>
            <SearchBar onFormSubmit={search} />
            <div className='row'>
                <div className='col-sm-12 col-md-8 mt-4'>
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className='col-sm-12 col-md-4 mt-4'>
                    <VideoList
                        onVideoSelect={(video) => setSelectedVideo(video)}
                        videos={videos}
                    />
                </div>
            </div>
        </div>
    );
};
export default App;
