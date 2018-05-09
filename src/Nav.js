import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <Link to={'/order'} />
            </div>
        );
    }
}

export default Nav;
