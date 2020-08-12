// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';


// Create React Component

const App = () => {
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className="label" htmlFor="name">Enter name ::  </label>
            <input id="name" type="text" />
            <button style={style}>Submit</button>
        </div>
    );
};

// Take React Component and show it on screen

ReactDOM.render(
    <App />,
    document.getElementById('root')
);