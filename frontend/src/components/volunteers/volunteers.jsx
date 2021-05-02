import React from 'react';

const Volunteers = (props) => {


    return (
        <div className="volunteer-cont">
            <h1>General Volunteer Application</h1>
            <p className="strong">All chaperones must fill out this application.</p>
            <span className="form-btn">Click Here</span>
            <h1>Specific Volunteer Role Application</h1>
            <p ><strong>Chaperone Dispatcher (remote):</strong>Must be fluent in Cantonese, Mandarin, or Vietnamese.</p>
            <p className="strong">Chaperone Dispatcher (remote):</p>
            <p className="strong">Volunteer Coordinator</p>
            <span className="form-btn">Click Here</span>
            <h1>COVID-19 Test Submission</h1>
            <p>For the safety of our volunteers and the community we are 
                serving, we are asking that ALL volunteers doing in-person work 
                to get tested for COVID-19 and to submit a screenshot/photo of 
                your results after completing an onboarding session.</p>
            <span className="form-btn">Click Here</span>
            
        </div>
    )
}

export default Volunteers;