import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);

        this.handleSetLanguage = this.handleSetLanguage.bind(this);
    }



    handleSetLanguage (language) {

    }

    render(){
    // debugger
    const languages = ['English', 'Spanish', 'Simplified Chinese', 'Traditional Chinese', 'Korean', 'Japanese', 'Tagalog', 'Vietnamese'];
    return (
        <section className="footer-container">
            <footer>
                <div className="footer-links">
                    {
                        this.props.isloggedIn ? (
                            <button onClick={() => this.props.logout()}>Log Out</button>
                        ):(
                            <Link to='/login'>Admin Login</Link>
                        )
                    }
                    <div className="dropup">
                        <ul className="lang-popup">
                            {languages.map(lang => <li onClick={e=>this.handleSetLanguage(e.target.value)}>{lang}</li>)}
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
}

export default Footer;