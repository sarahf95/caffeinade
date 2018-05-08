import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Description from "./Description";
import Order from "./Order";
import Ingredients from "./Ingredients";
import Nutrition from "./Nutrition";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Description />
          <Order />
          <Ingredients />
          <Nutrition />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
