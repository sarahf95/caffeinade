import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import logo from './img/logo.jpg';
class Nav extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <Link to={'/'} className="homebutton">
                    <img src={logo} alt="home" />
                </Link>
                <div className="nav">
                    <Link className="menu-item" to={'/about'}>
                        About
                    </Link>
                    <Link className="menu-item" to={'/events'}>
                        Events
                    </Link>
                    <Link className="menu-item" to={'/conatct'}>
                        Contact
                    </Link>
                </div>
            </div>
        );
    }
}

export default Nav;
