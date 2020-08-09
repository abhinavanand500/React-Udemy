import React from 'react';

const NewsContent = ({ news }) => {

    if (news.author === null) {
        news.author = 'Unknown';
    }
    const myStyle = {
        maxWidth: '540px',
        cursor: 'pointer',
        display: 'flex !important',
        alignItems: 'center !important'
    }
    return (
        <>
            {/* <div onClick={() => onNewsSelect(video)} className="card mb-3 my-2" style={myStyle}></div> */}
            <div className="card mb-3 my-2" style={myStyle}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={news.urlToImage} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{news.author}</h5>
                            <p className="card-text">{news.title}</p>
                            <p className="card-text"><small className="text-muted">{news.source.name} at {news.publishedAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NewsContent;