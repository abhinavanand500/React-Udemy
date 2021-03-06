import React from "react";
import Unplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await Unplash.get("/search/photos", {
            params: { query: term },
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
