import React from 'react';
import NavBar from './NavBar';
import NewsApi from '../api/NewsApi';
import NewsList from './NewsList';
import DisplayContent from './DisplayContent';
class App extends React.Component {
    state = { news: [], selectedNews: null }

    componentDidMount() {
        this.onTermSubmit('');
    }
    onTermSubmit = async () => {
        const response = await NewsApi.get("");
        console.log(response.data.articles);
        this.setState({ news: response.data.articles, selectedNews: response.data.articles[0] });
    };
    render() {
        return (
            <>
                <NavBar />
                <div className='container my-3'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <DisplayContent news={this.state.selectedNews} />
                        </div>
                        <div className='col-md-4'>
                            <NewsList news={this.state.news} />
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default App;