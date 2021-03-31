import React from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.underline = this.underline.bind(this)
    }

    navBorder(){
        if (window.location.hash !== `#/`) {
            return 'navunder'
        }
    }
    underline(hashPath){
        if(window.location.hash === `#${hashPath}`){
            return 'underline'
        }

    }

    

    render(){
        return(
            <div id="navbar-main" className={`${this.navBorder()}`}>
                <Link to="/" className={`nav-link ${this.underline('/')}`}>Home</Link>
                <Link to="/about" className={`nav-link ${this.underline('/about')}`}>About Us</Link>
                <span>
                    <span className={`nav-link ${this.underline('/feedback')} ${this.underline('/protection')} ${this.underline('/volunteers')}`}>Get Involved <i className="fas fa-caret-down"></i></span>
                <span id="involved" className="nav-dropdown">
                    <ul>
                        <li><Link to="/volunteers" >Volunteers</Link></li>
                        <li><Link to="/protection" >Protection in Your City</Link></li>
                        <li><Link to="/feedback" >Feedback</Link></li>
                    </ul>
                </span>
                </span>
                <span>
                    <span className={`nav-link ${this.underline('/donate')} ${this.underline('/sponsors')}`} >Donations <i className="fas fa-caret-down"></i></span>
                    <span id="donate"className="nav-dropdown">
                        <ul>
                            <li><Link to="/donate" >Donate</Link></li>
                            <li><Link to="/sponsors">Sponsors</Link></li>
                        </ul>
                </span>
                </span>
                <Link to="/media" className={`nav-link ${this.underline('/media')}`}>Media</Link>
                <Link to="/contact" className={`nav-link ${this.underline('/contact')}`}>Contact Us</Link>
                <span>
                    <span className={`nav-link ${this.underline('/resources')}`}>More <i className="fas fa-caret-down"></i></span>
                    <span id="more" className="nav-dropdown">
                        <ul>
                            <li><Link to="/resources" >Resources</Link></li>
                        </ul>
                    </span>
                </span>
            </div>
        )
    }

}
export default Navbar;