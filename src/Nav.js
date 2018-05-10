import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import logo from './img/logo.jpg';
class Nav extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav">
                    <Link to={'/'} className="homebutton">
                        <img src={logo} alt="home" />
                    </Link>
                    <Link className="menu-item" to={'/about'}>
                        About
                    </Link>
                    <Link className="menu-item" to={'/events'}>
                        Events
                    </Link>
                </div>
            </div>
        );
    }
}

export default Nav;
