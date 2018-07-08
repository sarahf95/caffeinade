import React, { Component } from 'react';
import './css/about.css';
import sarah from './img/sarah.png';
import andre from './img/andre.png';
import henry from './img/henry.png';
import shelby from './img/shelby.png';
import eric from './img/eric.png';
import nikki from './img/nikki.png';
import Person from './Person';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {
                    name: 'Sarah Feldmann',
                    photo: sarah,
                    photoAlt: 'sarah',
                    title: 'Chief Executive Officer',
                    description:
                        'Sarah graduated from the University of Washington in June with a degree in Informatics and a minor in Entrepreneurship. She\'ll be starting at Amazon this fall as a software engineer.'
                },
                {
                    name: 'Andre Do Carmo',
                    photo: andre,
                    photoAlt: 'andre',
                    title: 'Chief Operating Officer',
                    description:
                        'André is a junior majoring in economics and minoring in entrepreneurship. He is on the executive board of the Lavin Entrepreneurship Program and has co-founded an educational NGO in his home country of Brazil!'
                },
                {
                    name: 'Henry Zhang',
                    photo: henry,
                    photoAlt: 'henry',
                    title: 'Chief Product Officer',
                    description:
                        'Henry is a Senior in the Informatics major with a focus on human computer interaction and is minoring in entrepreneurship. He grew up in Pullman, WA but was never a coug fan.'
                },
                {
                    name: 'Shelby Fosbourgh',
                    photo: shelby,
                    photoAlt: 'shelby',
                    title: 'Chief Marketing Officer',
                    description:
                        'Shelby is a Senior majoring in English with a Sales Certificate, and minoring in Military Science & Leadership, as well as Entrepreneurship. Plus, she’s also in the Army ROTC!'
                },
                {
                    name: 'Nikki Isberto',
                    photo: nikki,
                    photoAlt: 'nikki',
                    title: 'Chief Design Officer',
                    description:
                        'Introducing our Chief Design Officer, Nikki! Nikki is a Senior majoring in Interdisciplinary Visual Arts and minoring in Entrepreneurship. One of her favorite things to do is explore new hikes and restaurants, which means she’s right at home here in the PNW!'
                },
                {
                    name: 'Eric Dimitrivich',
                    photo: eric,
                    photoAlt: 'eric',
                    title: 'Chief Financial Officer',
                    description:
                        'Meet Eric, our Chief Finance Officer! Eric is a junior double majoring in Finance and Entrepreneurship, and is also part of the Foster School’s Professional Sales Program. Eric loves to travel, and has already visited over 20 countries (& counting)!'
                }
            ]
        };
    }
    render() {
        let people = this.state.people.map(item => {
            return (
                <Person
                    photo={item.photo}
                    photoAlt={item.photoAlt}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                />
            );
        });
        return (
            <div className="about">
                <div className="about-header" />
                <div className="team">{people}</div>
            </div>
        );
    }
}

export default About;
