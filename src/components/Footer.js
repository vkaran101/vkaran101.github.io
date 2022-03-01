import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/vandana-karan/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#986e68"/>
            </a>
            <a href="mailto: vandana.karan.101@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#986e68"/>
            </a>
        </div>
    );
  }
  
  export default Footer;