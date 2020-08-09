import React from 'react';
import NewsContent from './NewsContent';

const NewsList = ({ news }) => {
    const renderedList = news.map((newss) => {
        return <NewsContent news={newss} />;
    })
    return <div>{renderedList}</div>;
}

export default NewsList;