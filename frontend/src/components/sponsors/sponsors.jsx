import React from 'react';
import { connect } from 'react-redux';
import languages from '../../util/language_util';

const Sponsors = ({ language }) => {


    return (
        <div className="get-involved-cont">
            <h1>{languages[`${language}`].interestedSponsor}</h1>
            <span>{languages[`${language}`].sponsorInfo}</span>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Sponsors);