import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
class App extends React.Component {
    state = { videos: [] };
    onTermSubmit = async (term) => {
        const response = await Youtube.get("/search", {
            params: {
                q: term,
            },
        });
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
    };
    // API KEY YOUTUBE =====   ===   'AIzaSyCGeIt39ff3FqUI761ribO-UZLX2_p5Ef8 '
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
                {this.state.videos.length} videos
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
