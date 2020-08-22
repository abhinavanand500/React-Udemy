import React from 'react';
import Template from './Template';
import web from '../images/1.svg'
const Home = () => {
    return (
        <Template
            h1Value="Build Your Website with"
            brand="Abhinav Anand"
            h2Value="I have a team of talented developer"
            imgsrc={web}
            visit="/about"
            btname="About Us"
        />
    )
}

export default Home;