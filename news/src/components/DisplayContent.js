import React from 'react';
import './Display.css'
const DisplayContent = ({ news }) => {
    if (!news) {
        return (
            <div class="ui segment">
                <div class="ui active loader"></div>
                <p></p>
            </div>
        );
    }
    console.log(news);
    return (
        <div className='my-2'>
            <h4 className='header'>{news.title}</h4><hr />
            <img src={news.urlToImage} className="card-img" alt="..." />
            <br /><hr />
            <h6>{news.description}</h6>

            <hr />
            <div style={{ alignItems: 'center' }}>
                <h6>Published At - {news.publishedAt}</h6>
                <h6>Published By - {news.source.name}</h6>
                <a href={news.url}><h6>Click If you want to know more about this story</h6></a>
            </div>

        </div>
    );
}

export default DisplayContent;