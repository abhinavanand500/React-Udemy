import React from 'react';

const NewsContent = ({ news, onNewsSelect }) => {

    if (news.author === null) {
        news.author = 'Unknown';
    }
    const myStyle = {
        maxWidth: '540px',
        cursor: 'pointer',
    }
    return (
        <>
            <div onClick={() => onNewsSelect(news)} className="card mb-3 my-2" style={myStyle}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={news.urlToImage} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{news.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NewsContent;