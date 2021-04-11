import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {

    const languages = ['English', 'Spanish', 'Simplified Chinese', 'Traditional Chinese', 'Korean', 'Japanese', 'Tagalog', 'Vietnamese']


    return (
        <section className="footer-container">
            <footer>
                <div className="footer-links">
                    <Link>Admin Login</Link>
                    <div className="dropup">
                        <ul className="lang-popup">
                            {languages.map(lang => <li>{lang}</li>)}
                        </ul>
                        <i className="fas fa-language"></i>
                    </div>
                </div>
                <p id="footer-copyright">
                    Copyright &copy; 2021 Protect Our Elders
                </p>
            </footer>
        </section>
    )
}

export default Footer;