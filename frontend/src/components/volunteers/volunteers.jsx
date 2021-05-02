import React from 'react';
import {Link} from 'react-router-dom'

const Volunteers = (props) => {


    return (
        <div className="volunteer-cont">
            <h1>General Volunteer Application</h1>
            <p className="strong">All chaperones must fill out this application.</p>
            <span className="form-btn">Click Here</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
            
            <h1>Specific Volunteer Role Application</h1>
            <ul>
                <li>
                    <span className='strong'>Volunteer Dispatch (remote):</span> If organization is your thing, we would love your help matching volunteer's schedules with seniors requesting a chaperone. Must be fluent in Cantonese, Mandarin, or Vietnamese.
                </li>
                <li>
                    <span className='strong'>Community Outreach:</span> Communities are stronger when we work together. Reach out to local business' and help build out a network our seniors can rely on.
                </li>
                <li>
                    <span className='strong'>Copywriting (remote):</span> We're just getting started, and we need help keeping the community updated on what's going on.
                </li>
                <li>
                    <span className='strong'>Social Media (remote):</span> Help spread the word and think through new avenues to reach target communities in need of assistance.
                </li>
                <li>
                    <span className='strong'>Admin:</span> There's a lot to be done behind the scenes so reach out with your skillset and ideas on how you can apply them with us.
                </li>
            </ul>
            <span className="form-btn">Click Here</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
            
            <h1>COVID-19 Test Submission</h1>
            <p>For the safety of our volunteers and the community we are 
                serving, we are asking that ALL volunteers doing in-person work 
                to get tested for COVID-19 and to submit a screenshot/photo of 
                your results after completing an onboarding session.</p>
            <span className="form-btn">Click Here</span>
            {/* <Link className="form-btn" to='/volunteers/signup'>Click Here</Link> */}
        </div>
    )
}

export default Volunteers;