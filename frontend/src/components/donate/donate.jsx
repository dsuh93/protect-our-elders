import React from 'react';
import { connect } from 'react-redux';
import languages from '../../util/language_util';

const Donate = ({ language }) => {


    return (
        <div className="get-involved-cont">
            <h1>{languages[`${language}`].interestedDonate}</h1>
            <span>{languages[`${language}`].donationInfo}</span>
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
)(Donate);