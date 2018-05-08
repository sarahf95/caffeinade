import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";
import coffee from "./img/coffee.png";
import raspberryNutrition from "./img/raspberry-white.png";

class Nutrition extends Component {
  render() {
    return (
      <div class="nutrition">
        <div class="nutrition-p-wrapper">
          <div class="nutrition-p ">
            <div class="caffeine-wrapper">
              <div class="caffeine">90</div>
              <div class="mg">mg caffeine per bottle</div>
            </div>
          </div>
          <div class="coffee-wrapper">
            <p class="coffee nutrition-p">equals one 8 oz</p>
            <img class="coffee-img" alt="coffee" src={coffee} />
          </div>

          <p class="nutrition-p natural">
            <i>natural</i> ingredients
          </p>
        </div>
        <img class="nutrition-facts" src={raspberryNutrition} />
      </div>
    );
  }
}

export default Nutrition;
