import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";
import lemon from "./img/lemon.png";
import water from "./img/water.png";
import agave from "./img/agave.png";
import guarana from "./img/guarana.png";

class Ingredients extends Component {
  render() {
    return (
      <div class="ingredients">
        <div class="ingredient-card">
          <img class="ingredient-img" src={water} alt="water" />
          <p>water</p>
        </div>
        <div class="ingredient-card">
          <img class="ingredient-img" src={lemon} alt="lemon" />
          <p>lemon</p>
        </div>
        <div class="ingredient-card">
          <img class="ingredient-img" src={agave} alt="agave" />
          <p>agave</p>
        </div>
        <div class="ingredient-card">
          <img class="ingredient-img" src={guarana} alt="guarana" />
          <p>guarana</p>
        </div>
      </div>
    );
  }
}

export default Ingredients;
