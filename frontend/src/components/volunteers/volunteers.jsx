import React from 'react';
import {Link} from 'react-router-dom'
import languages from '../../util/language_util';

const Volunteers = ({language}) => {

    debugger
    return (
        <div className="volunteer-cont">
            <h1>{languages[`${language}`].generalVol}</h1>
            <p className="strong">{languages[`${language}`].allChap}</p>
            <span className="form-btn">{languages[`${language}`].clickHere}</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
            
            <h1>{languages[`${language}`].specificVol}</h1>
            <ul>
                <li>
                    <span className='strong'>{languages[`${language}`].volDisp}</span> {languages[`${language}`].dispDesc}
                </li>
                <li>
                    <span className='strong'>{languages[`${language}`].comOutreach}</span> {languages[`${language}`].comDesc}
                </li>
                <li>
                    <span className='strong'>{languages[`${language}`].copywriting}</span> {languages[`${language}`].copywritingDesc}
                </li>
                <li>
                    <span className='strong'>{languages[`${language}`].social}</span> {languages[`${language}`].socialDesc}
                </li>
                <li>
                    <span className='strong'>{languages[`${language}`].admin}</span> {languages[`${language}`].adminDesc}
                </li>
            </ul>
            <span className="form-btn">{languages[`${language}`].clickHere}</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
            
            <h1>{languages[`${language}`].covidSub}</h1>
            <p>{languages[`${language}`].covidDesc}</p>
            <span className="form-btn">{languages[`${language}`].clickHere}</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
        </div>
    )
}

export default Volunteers;