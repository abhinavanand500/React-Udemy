import React from "react";
import Template from "./Template";
import web from "../images/DP.png";

const Home = () => {
    return (
        <Template
            h1Value="I am"
            brand="Abhinav Anand"
            h2Value="FULL STACK WEB DEVELOPER"
            imgsrc={web}
            visit="/about"
            btname="About Us"
            page="home"
        />
    );
};

export default Home;
