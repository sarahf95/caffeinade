import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';
import Order from './Order';
import Ingredients from './Ingredients';
import Nutrition from './Nutrition';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Description />
                <Order />
                <Ingredients />
                <Nutrition />
            </div>
        );
    }
}
export default Home;
