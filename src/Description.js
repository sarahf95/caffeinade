import React, { Component } from 'react';
import './css/style.css';
import startQuote from './img/open-quote.svg';
import endQuote from './img/end-quote.svg';

class Description extends Component {
    render() {
        return (
            <div className="description-wrapper">
                <div className="description">
                    <img className="quote" src={startQuote} alt="quote" />
                    <div className="description-content">
                        Caffeinade is a refreshing all-natural drink that is
                        sure to quench your thirst and power you through the
                        day! Caffeinated with guarana extract and naturally
                        sweetened with agave, you’ll have up to 6 hours of
                        sustained energy without sugar crashes. Now that’s the
                        refreshing way to energize!
                    </div>
                    <img className="quote end" src={endQuote} alt="quote" />
                </div>
            </div>
        );
    }
}

export default Description;
