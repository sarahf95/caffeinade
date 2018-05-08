import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";

class Header extends Component {
  render() {
    return (
      <div className="heading-wrapper">
        <div className="fade title-wrapper">
          <h1>Caffeinade</h1>
          <p className="tagline">The refreshing way </p>
          <p className="tagline">to energize.</p>
        </div>
      </div>
    );
  }
}

export default Header;
