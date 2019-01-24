import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faSync } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <FontAwesomeIcon className="footer-icon" icon={faComment} flip="horizontal" />
            <FontAwesomeIcon className="footer-icon-with-text" icon={faSync} /> 
            <p>6</p>
            <FontAwesomeIcon className="footer-icon-with-text" icon={faHeart} /> 
            <p>4</p>
            <FontAwesomeIcon className="footer-icon" icon={faEnvelopeSquare} />
        </div>
    );
};

export default Footer;
