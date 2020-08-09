import React from 'react';
import NavBar from './NavBar';
import NewsApi from '../api/NewsApi';
import NewsList from './NewsList';
class App extends React.Component {
    state = { news: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('');
    }
    onTermSubmit = async () => {
        const response = await NewsApi.get("");
        console.log(response.data.articles);
        this.setState({ news: response.data.articles, selectedVideo: response.data.articles[0] });
    };
    render() {
        return (
            <>
                <NavBar />
                <div className='container my-3'>
                    <NewsList news={this.state.news} />
                </div>
            </>
        );
    }
}

export default App;