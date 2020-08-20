import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='ui inverted pointing menu'>
            <Link to='/' className='item'>Stream</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;