import React from 'react';
import poelogo from '../../assets/images/poelogo.png';
import poetxt from '../../assets/images/poe_txt.png';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div id="poelogo">
                <img  src='https://i.ibb.co/S6kXhBs/logo-1.png'/>
                {/* <img  src={poetxt}/> */}
                <h1 id="logo-text">protect <br/>our elders</h1>
            </div>
        )
    }

}
export default Splash;