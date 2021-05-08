import React from 'react';
import languages from '../../util/language_util';


const Protection = ({language}) => {

    debugger
    return (
       <div className="get-involved-cont">
            <h1>{languages[`${language}`].areThereElders}</h1>
            <span>{languages[`${language}`].wantToHelp}
            </span>
            <span className="form-btn">{languages[`${language}`].inquire}</span>
       </div>
    )
}

export default Protection;