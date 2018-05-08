import React, { Component } from 'react';
import './css/style.css';
import lemon from './img/lemon.png';
import water from './img/water.png';
import agave from './img/agave.png';
import guarana from './img/guarana.png';

class Ingredients extends Component {
    render() {
        return (
            <div className="ingredients">
                <div className="ingredient-card">
                    <img className="ingredient-img" src={water} alt="water" />
                    <p>water</p>
                </div>
                <div className="ingredient-card">
                    <img className="ingredient-img" src={lemon} alt="lemon" />
                    <p>lemon</p>
                </div>
                <div className="ingredient-card">
                    <img className="ingredient-img" src={agave} alt="agave" />
                    <p>agave</p>
                </div>
                <div className="ingredient-card">
                    <img
                        className="ingredient-img"
                        src={guarana}
                        alt="guarana"
                    />
                    <p>guarana</p>
                </div>
            </div>
        );
    }
}

export default Ingredients;
