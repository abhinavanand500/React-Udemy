import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
const App=()=>{
    return(
        <div className="ui container comments">
            <CommentDetail author="Abhinav" timeAgo="Today at 5:00 PM" />
            <CommentDetail author="Anurag" timeAgo="Yesterday at 9:00 PM" />
            <CommentDetail author="Ram" timeAgo="Today at 12:00 PM" />
            <CommentDetail author="Ayush" timeAgo="Today at 3:00 PM" />
        </div>
    );
}


ReactDOM.render(<App/>,document.getElementById('root'))