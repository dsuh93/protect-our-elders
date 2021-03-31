import React from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="navbar-main">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About Us</Link>
                <span class="nav-link">Get Involved <i class="fas fa-caret-down"></i></span>
                <span class="nav-link">Donations <i class="fas fa-caret-down"></i></span>
                <Link to="/media" class="nav-link">Media</Link>
                <Link to="/contact" class="nav-link">Contact Us</Link>
                <span class="nav-link">More <i class="fas fa-caret-down"></i></span>
            </div>
        )
    }

}
export default Navbar;