import React from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.underline = this.underline.bind(this)
        this.dropdown = this.dropdown.bind(this)
        this.linkClick = this.linkClick.bind(this)
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

    dropdown(category){

        const involved = document.getElementById('involved')
        const donate = document.getElementById('donate')
        const more = document.getElementById('more')
        const iCaret = document.getElementById('i-caret')
        const dCaret = document.getElementById('d-caret')
        const mCaret = document.getElementById('m-caret')
        
        if(category === 'involved'){
            if (involved.style.display === 'none' || involved.style.display === ''){
                involved.style.display = 'flex'
                donate.style.display = 'none'
                more.style.display = 'none'
                iCaret.classList.add('up')
                iCaret.classList.remove('down')
                if (dCaret.classList.contains('up')){
                    dCaret.classList.add('down')
                    dCaret.classList.remove('up')
                } else if (mCaret.classList.contains('up')){
                    mCaret.classList.add('down')
                    mCaret.classList.remove('up')
                }
            } else{
                involved.style.display = 'none'
                iCaret.classList.add('down')
                iCaret.classList.remove('up')
            }
        }

        if (category === 'donate') {
            if (donate.style.display === 'none' || donate.style.display === '') {
                donate.style.display = 'flex'
                involved.style.display = 'none'
                more.style.display = 'none'
                dCaret.classList.add('up')
                dCaret.classList.remove('down')
                if (iCaret.classList.contains('up')) {
                    iCaret.classList.add('down')
                    iCaret.classList.remove('up')
                } else if (mCaret.classList.contains('up')) {
                    mCaret.classList.add('down')
                    mCaret.classList.remove('up')
                }

            } else {
                donate.style.display = 'none'
                dCaret.classList.add('down')
                dCaret.classList.remove('up')
            }
        }

        if (category === 'more') {
            if (more.style.display === 'none' || more.style.display === '') {
                more.style.display = 'flex'
                donate.style.display = 'none'
                involved.style.display = 'none'
                mCaret.classList.add('up')
                mCaret.classList.remove('down')
                if (dCaret.classList.contains('up')) {
                    dCaret.classList.add('down')
                    dCaret.classList.remove('up')
                } else if (iCaret.classList.contains('up')) {
                    iCaret.classList.add('down')
                    iCaret.classList.remove('up')
                }
            } else {
                more.style.display = 'none'
                mCaret.classList.add('down')
                mCaret.classList.remove('up')
            }
        }
    }

    linkClick(category){
        const involved = document.getElementById('involved')
        const donate = document.getElementById('donate')
        const more = document.getElementById('more')
        const iCaret = document.getElementById('i-caret')
        const dCaret = document.getElementById('d-caret')
        const mCaret = document.getElementById('m-caret')

        if (category === 'involved') {
                involved.style.display = 'none'
                iCaret.classList.add('down')
                iCaret.classList.remove('up')
        } else if (category === 'donate') {
            donate.style.display = 'none'
            dCaret.classList.add('down')
            dCaret.classList.remove('up')
        } else if (category === 'more') {
            more.style.display = 'none'
            mCaret.classList.add('down')
            mCaret.classList.remove('up')
        }

        
    }
    

    render(){
        return(
            <div id="navbar-main" className={`${this.navBorder()}`}>
                <Link to="/" className={`nav-link ${this.underline('/')}`}>Home</Link>
                <Link to="/about" className={`nav-link ${this.underline('/about')}`}>About Us</Link>
                <span>
                    <span onClick={() => this.dropdown('involved')} className={`nav-link ${this.underline('/feedback')} ${this.underline('/protection')} ${this.underline('/volunteers')}`}>Get Involved <i id="i-caret" className="fas fa-caret-down"></i></span>
                <span id="involved" className="nav-dropdown">
                    <ul>
                            <li onClick={() => this.linkClick('involved')}><Link to="/volunteers">Volunteers</Link></li>
                            <li onClick={() => this.linkClick('involved')}><Link to="/protection" >Protection in Your City</Link></li>
                            <li onClick={() => this.linkClick('involved')}><Link to="/feedback" >Feedback</Link></li>
                    </ul>
                </span>
                </span>
                <span>
                    <span onClick={() => this.dropdown('donate')} className={`nav-link ${this.underline('/donate')} ${this.underline('/sponsors')}`} >Donations <i id="d-caret"className="fas fa-caret-down"></i></span>
                    <span id="donate"className="nav-dropdown">
                        <ul>
                            <li onClick={() => this.linkClick('donate')}><Link to="/donate" >Donate</Link></li>
                            <li onClick={() => this.linkClick('donate')}><Link to="/sponsors">Sponsors</Link></li>
                        </ul>
                </span>
                </span>
                <Link to="/media" className={`nav-link ${this.underline('/media')}`}>Media</Link>
                <Link to="/contact" className={`nav-link ${this.underline('/contact')}`}>Contact Us</Link>
                <span>
                    <span onClick={() => this.dropdown('more')} className={`nav-link ${this.underline('/resources')}`}>More <i id="m-caret" className="fas fa-caret-down"></i></span>
                    <span id="more" className="nav-dropdown">
                        <ul>
                            <li onClick={() => this.linkClick('more')}><Link to="/resources" >Resources</Link></li>
                        </ul>
                    </span>
                </span>
            </div>
        )
    }

}
export default Navbar;