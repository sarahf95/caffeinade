import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";
import raspberry from "./img/white-raspberry.svg";
import lemon from "./img/white-lemon.svg";

class Order extends Component {
  render() {
    return (
      <div class="order-wrapper">
        <div class="order">
          <h2 class="reserve">Reserve yours today</h2>
          <div class="flavors">
            <div class="lemon flavor">
              <img class="flavor-icon lemon-icon" src={lemon} alt="lemon" />{" "}
              Lemon
            </div>
            <div class="raspberry flavor">
              <img
                class="flavor-icon raspberry-icon"
                src={raspberry}
                alt="raspberry"
              />{" "}
              Raspberry
            </div>
          </div>
          <div class="prices">
            <div class="price-wrapper">
              <div class="price">$3.75</div>
              <div class="unit">per bottle</div>
            </div>
            <div class="price-wrapper">
              <div class="price">$20.00</div>
              <div class="unit">per six pack</div>
            </div>
          </div>
          <div class="venmo-handle">
            <a
              class="venmo-handle"
              href="http://venmo.com/caffeinade"
              target="_blank"
            >
              venmo.com/caffeinade
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
