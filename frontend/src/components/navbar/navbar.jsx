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
        debugger
        return(
            <div id="navbar-main" class={`${this.navBorder()}`}>
                <Link to="/" class={`nav-link ${this.underline('/')}`}>Home</Link>
                <Link to="/about" class={`nav-link ${this.underline('/about')}`}>About Us</Link>
                <span class="nav-link">Get Involved <i class="fas fa-caret-down"></i></span>
                <span class="nav-link">Donations <i class="fas fa-caret-down"></i></span>
                <Link to="/media" class={`nav-link ${this.underline('/media')}`}>Media</Link>
                <Link to="/contact" class={`nav-link ${this.underline('/contact')}`}>Contact Us</Link>
                <span class="nav-link">More <i class="fas fa-caret-down"></i></span>
            </div>
        )
    }

}
export default Navbar;