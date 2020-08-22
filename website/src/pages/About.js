import React from 'react';
import Template from './Template';
import web from '../images/2.svg'
const About = () => {
    return (
        <Template
            h1Value="We are here to help you."
            brand="We are For You"
            h2Value="Please bring your idea. We will implement it for you"
            imgsrc={web}
            visit="/about"
            btname="Our Services"
        />
    );
}

export default About;