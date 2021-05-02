import React from 'react';
import {Link} from 'react-router-dom'

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
            
            <h2>General Volunteer Application</h2>
            <br/>
            <p>Volunteers are at the heart of everything we do, and we appreciate your support protecting your local community!</p>
            <br/>
            <h3>Roles we're looking for</h3>
            <ul>
                <li>
                    <span><strong>Chaperone:</strong> Throw on some sunscreen and your walking shoes. You'll be helping our seniors retain their independance and feel safe out in their neighboorhoods.</span>
                </li>
                <li>
                    <span><strong>Volunteer Dispatch:</strong> If organization is your thing, we would love your help matching volunteer's schedules with seniors requesting a chaperone.</span>
                </li>
                <li>
                    <span><strong>Community Outreach:</strong> Communities are stronger when we work together. Reach out to local business' and help build out a network our seniors can rely on.</span>
                </li>
                <li>
                    <span><strong>Copywriting:</strong> We're just getting started, and we need help keeping the community updated on what's going on.</span>
                </li>
                <li>
                    <span><strong>Social Media:</strong> Help spread the word and think through new avenues to reach target communities in need of assistance.</span>
                </li>
                <li>
                    <span><strong>Admin:</strong> There's a lot to be done behind the scenes so reach out with your skillset and ideas on how you can apply them with us.</span>
                </li>
            </ul>
            {/* <Link className="form-link" to='/volunteers/signup'><button className="volunteer-signup-btn">Become a Volunteer</button></Link> */}

            <a className="form-link" href="https://forms.gle/E4rjfxxpRdAJHZUT6" target="_blank" rel="noopener noreferrer"><button className="volunteer-signup-btn">Become a Volunteer</button></a>
        </div>
    )
}

export default Volunteers;