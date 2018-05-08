import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import venmo from "./img/venmo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.facebook.com/caffeinade/" target="_blank">
          <img className=" social " src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/drinkcaffeinade " target="_blank ">
          <img className="social " src={instagram} alt="instagram " />
        </a>
        <a target="_blank " href="https://venmo.com/caffeinade ">
          <img src={venmo} className="social venmo " alt="venmo " />
        </a>
      </div>
    );
  }
}

export default Footer;
