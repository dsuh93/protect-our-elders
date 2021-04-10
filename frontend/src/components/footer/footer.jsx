import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <section className="footer-container">
            <footer>
                <div className="footer-links">
                    <Link>Admin Login</Link>
                    <ul className="lang-links">
                        <li>Languages:&nbsp;</li>
                        <li><a>English&nbsp;|&nbsp;</a></li>
                        <li><a>Spanish&nbsp;|&nbsp;</a></li>
                        <li><a>Mandarin&nbsp;|&nbsp;</a></li>
                        <li><a>Cantonese&nbsp;|&nbsp;</a></li>
                        <li><a>Taiwanese&nbsp;|&nbsp;</a></li>
                        <li><a>Korean&nbsp;|&nbsp;</a></li>
                        <li><a>Japanese&nbsp;|&nbsp;</a></li>
                        <li><a>Tagalog&nbsp;|&nbsp;</a></li>
                        <li><a>Vietnamese</a></li>
                    </ul>
                </div>
                <p id="footer-copyright">
                    Copyright &copy; 2021 Protect Our Elders
                </p>
            </footer>
        </section>
    )
}

export default Footer;