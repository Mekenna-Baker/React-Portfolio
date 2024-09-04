import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer >
            <a href="https://github.com/Mekenna-Baker" target="_blank">
                <FontAwesomeIcon icon={faGithub} /> </a>

            <a href="https://www.linkedin.com/in/mekenna--baker/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />  </a>

            <a href="https://www.facebook.com/mekenna.drabner.04/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>

        </footer>

    );
};

export default Footer;