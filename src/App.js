import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';
import Order from './Order';
import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Footer from './Footer';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Nav />
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
