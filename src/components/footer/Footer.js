import React from 'react';
import FooterCss from './FooterCss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component{
    render(){
        return (
            <FooterCss>
                <ul>
                    <li>
                        <a href=""><FontAwesomeIcon icon={ faFacebookF } /></a>
                    </li>
                    <li>
                        <a href=""><FontAwesomeIcon icon={ faTwitter } /></a>
                    </li>
                    <li>
                        <a href=""><FontAwesomeIcon icon={ faInstagram } /></a>
                    </li>
                </ul>

                <p>&copy; Copyright Ping. All rights reserved.</p>
            </FooterCss>
        )
    }
}

export default Footer;