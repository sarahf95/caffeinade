import React, { Component } from 'react';
import './css/about.css';
import sarah from './img/sarah.png';
import andre from './img/andre.png';
import henry from './img/henry.png';
import shelby from './img/shelby.png';
import eric from './img/eric.png';
import kara from './img/kara.png';
import nikki from './img/nikki.png';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about-header" />
                <div className="team">
                    <div className="row">
                        <div className="person-wrapper">
                            <img
                                src={sarah}
                                alt="sarah"
                                className="person-img"
                            />{' '}
                            <p className="person-title">Sarah Feldmann </p>
                            <p>Cheif Executive Officer</p>
                        </div>
                        <div className="person-wrapper">
                            <img
                                src={andre}
                                alt="andre"
                                className="person-img"
                            />{' '}
                            <p className="person-title">Andre de Carvo </p>{' '}
                            <p>Cheif Operating Officer</p>
                        </div>
                        <div className="person-wrapper">
                            <img
                                src={henry}
                                alt="henry"
                                className="person-img"
                            />{' '}
                            <p className="person-title">Henry Zhang </p>
                            <p>Cheif Product Officer</p>
                        </div>
                        <div className="person-wrapper">
                            <img
                                src={shelby}
                                alt="shelby"
                                className="person-img"
                            />{' '}
                            <p className="person-title">Shelby Fosbourgh </p>
                            <p>Cheif Marketing Officer</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="person-wrapper">
                            <img src={eric} alt="eric" className="person-img" />{' '}
                            <p className="person-title">Eric Dimitrivich </p>
                            <p>Cheif Financial Officer</p>
                        </div>
                        <div className="person-wrapper">
                            <img
                                src={nikki}
                                alt="nikki"
                                className="person-img"
                            />{' '}
                            <p className="person-title">Nikki Isberto</p>
                            <p>Cheif Design Officer</p>
                        </div>
                        <div className="person-wrapper">
                            <img src={kara} alt="kara" className="person-img" />{' '}
                            <p className="person-title">Kara Guizar </p>
                            <p>Cheif Research Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
