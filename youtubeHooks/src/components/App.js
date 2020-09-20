import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./videoDetail";
import useVideos from "../hooks/useVideos";
import Footer from "./Footer";
import "./Footer.css";
const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("Aalas ke pedh");
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    return (
        <>
            <div className='container'>
                <div className='breadcrumb mx-auto'>
                    <h4 className='mx-auto'>Welcome To Youtube Clone</h4>
                </div>
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
            <Footer />
        </>
    );
};
export default App;
