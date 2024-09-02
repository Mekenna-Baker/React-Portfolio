import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import '../css/AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <h2>About Me <FontAwesomeIcon icon={faFaceSmile} /></h2>
            <p>
                This is an about me
            </p>
        </div>
    );
};

export default AboutMe;