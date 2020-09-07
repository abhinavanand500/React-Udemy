import React from "react";
import "./links.css";
const LinksForApp = () => {
    return (
        <div className="social-link">
            <a
                href="http://bloggify.pythonanywhere.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-blog" aria-hidden="true" />
            </a>
            <a
                href="https://github.com/abhinavanand500"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a
                href="https://www.linkedin.com/in/abhinav-a-216a0a110/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
                href="https://www.hackerrank.com/abhinav_anand500?hr_r=1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-hackerrank" aria-hidden="true" />
            </a>
        </div>
    );
};

export default LinksForApp;
