import React from 'react';
import poelogo from '../../assets/images/poelogo.png';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="poelogo">
                <img  src={poelogo}/>
            </div>
        )
    }

}
export default Splash;