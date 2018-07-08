import React, { Component } from 'react';
import './css/about.css';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <div className="person-wrapper">
                    <img
                        src={this.props.photo}
                        alt={this.props.photoAlt}
                        className="person-img"
                    />{' '}
                </div>
                <div className="person-description-wrapper">
                    <div className="person-title-wrapper">
                        <p className="person-name">{this.props.name} </p>
                        <p className="person-title">
                            {this.props.title.toUpperCase()}
                        </p>
                    </div>
                    <p className="person-description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Person;
