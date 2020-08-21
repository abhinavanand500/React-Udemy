import React, { useState } from 'react';
import './button.css'
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <button onClick={() => setCount(count + 1)} className='button'>Increase</button>
            <div className='button'>{count}</div>
            <button onClick={() => setCount(count - 1)} className='button'>Decrease</button>
        </div>
    );
}

export default App;