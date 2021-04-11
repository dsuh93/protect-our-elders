import React from 'react';
import Bert from './bert';
import David from './david';
import Dave from './dave';
import Dan from './dan';
import Gigi from './gigi';
import Kai from './kai';
import Henry from './henry';

function About () {
    const team = [<Bert/>, <Dan/>, <Dave/>, <David/>, <Gigi/>, <Kai/>, <Henry/>];
    
    return (
        <div className="about-page-container">
            { shuffle(team).map((card, idx) => (<span key={idx}>{card}</span>)) }
            <span className="about-text"> On October 26, 2020, seven aspiring developers set out on a 
                journey that would change their lives forever. Equipped only 
                with knowledge of how to iterate through an array and a dream, 
                we took our places in App Academy's most illustrous cohort, and 
                forged a path through the unknown, determined to conquer the 
                world of software engineering. We learned, we laughed, we 
                sometimes cried and developed applications to commemorate our 
                pain in the form of memes. Most importantly, we crafted bonds 
                of friendship and cameraderie that would last a lifetime. We 
                collectively were, and still are, greatly affected by the rise
                of targeted violence against the AAPI community during the pandemic. 
                Violence against anyone, especially the most vulnerable and 
                revered members of our community, irrespective of their race, 
                ethnicity, or other identifying characteristics, is both morally 
                repugnant and reprehensible. With this project, we aim to take a 
                stand and employ our development skills for good. We hope to 
                donate this application to any person or organization with the 
                desire and means to assume responsibility for what we've built. 
                If this is something you might be interested in please do not 
                hesitate to contact us. Until then, spread love not hate.</span>
        </div>
    )
};

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export default About;
