import React, { Component } from 'react';
import './css/style.css';
import raspberry from './img/white-raspberry.svg';
import lemon from './img/white-lemon.svg';

class Order extends Component {
    render() {
        return (
            <div className="order-wrapper">
                <div className="order">
                    <h2 className="reserve">Reserve yours today</h2>
                    <div className="flavors">
                        <div className="lemon flavor">
                            <img
                                className="flavor-icon lemon-icon"
                                src={lemon}
                                alt="lemon"
                            />{' '}
                            Lemon
                        </div>
                        <div className="raspberry flavor">
                            <img
                                className="flavor-icon raspberry-icon"
                                src={raspberry}
                                alt="raspberry"
                            />{' '}
                            Raspberry
                        </div>
                    </div>
                    <div className="prices">
                        <div className="price-wrapper">
                            <div className="price">$3.75</div>
                            <div className="unit">per bottle</div>
                        </div>
                        <div className="price-wrapper">
                            <div className="price">$20.00</div>
                            <div className="unit">per six pack</div>
                        </div>
                    </div>
                    <div className="venmo-handle">
                        <a
                            className="venmo-handle"
                            href="http://venmo.com/caffeinade"
                            target="_blank"
                            rel="noopener noreferrer"
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
