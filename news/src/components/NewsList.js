import React from 'react';
import NewsContent from './NewsContent';

const NewsList = ({ news, onNewsSelect }) => {
    const renderedList = news.map((newss) => {
        return <NewsContent onNewsSelect={onNewsSelect} news={newss} />;
    })
    return <div>{renderedList}</div>;
}

export default NewsList;