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
                <img  src={poelogo}/>
                <img  src={poetxt}/>
            </div>
        )
    }

}
export default Splash;