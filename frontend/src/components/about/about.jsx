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
