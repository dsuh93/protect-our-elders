import React from 'react';

const Feedback = ({language}) => {


    return (
        <div className="get-involved-cont">
            <h1>Feedback</h1>
            <span>We're still growing! If you are a volunteer or a community member who has used our service, we would love to hear your thoughts and feedback on what we are doing well, and how we can improve our service.</span>
                <span className="form-btn">Click Here</span>
            <h1>Incident Report</h1>
                <span>If you are a volunteer who has experienced or witnessed something disturbing during your shift, please file an incident report below.</span>
                <span className="form-btn">Click Here</span>
        </div>
    )
}

export default Feedback;