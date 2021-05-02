import React from 'react';

const Volunteers = (props) => {


    return (
        <div className="volunteer-cont">
            <h1>General Volunteer Application</h1>
            <br/>
            <p>Volunteers are at the heart of everything we do, and we appreciate your support protecting your local community!</p>
            <br/>
            <h3>Roles we're looking for</h3>
            <ul>
                <li>
                    <span><strong>Chaperone:</strong> Throw on some sunscreen and your walking shoes. You'll be helping our seniors retain their independance and feel safe out in their neighboorhoods.</span>
                </li>
                <li>
                    <span><strong>Volunteer Dispatch:</strong> We're looking for a organization</span>
                </li>
                <li>
                    <span><strong>Community Outreach:</strong> Let's go for a walk</span>
                </li>
                <li>
                    <span><strong>Copywriting:</strong> Let's go for a walk</span>
                </li>
                <li>
                    <span><strong>Social Media:</strong> Help spread the word and think through new avenues to reach target communities in need of assistance</span>
                </li>
                <li>
                    <span><strong>Admin:</strong> Let's go for a walk</span>
                </li>
            </ul>
            <a className="form-link"><button className="volunteer-signup-btn">Become a Volunteer</button></a>
        </div>
    )
}

export default Volunteers;