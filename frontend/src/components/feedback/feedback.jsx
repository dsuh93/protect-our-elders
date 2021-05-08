import React from 'react';
import languages from '../../util/language_util';

const Feedback = ({language}) => {


    return (
        <div className="get-involved-cont">
            <h1>{languages[`${language}`].feedback}</h1>
            <span>{languages[`${language}`].stillGrowing}</span>
            <span className="form-btn">{languages[`${language}`].clickHere}</span>
            <h1>{languages[`${language}`].incidentReport}</h1>
            <span>{languages[`${language}`].somethingDisturbing}</span>
            <span className="form-btn">{languages[`${language}`].clickHere}</span>
        </div>
    )
}

export default Feedback;