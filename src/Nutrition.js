import React, { Component } from 'react';
import './css/style.css';
import coffee from './img/coffee.png';
import raspberryNutrition from './img/raspberry-white.png';

class Nutrition extends Component {
    render() {
        return (
            <div className="nutrition">
                <div className="nutrition-p-wrapper">
                    <div className="nutrition-p ">
                        <div className="caffeine-wrapper">
                            <div className="caffeine">90</div>
                            <div className="mg">mg caffeine per bottle</div>
                        </div>
                    </div>
                    <div className="coffee-wrapper">
                        <p className="coffee nutrition-p">equals one 8 oz</p>
                        <img className="coffee-img" alt="coffee" src={coffee} />
                    </div>

                    <p className="nutrition-p natural">
                        <i>natural</i> ingredients
                    </p>
                </div>
                <img className="nutrition-facts" src={raspberryNutrition} />
            </div>
        );
    }
}

export default Nutrition;
