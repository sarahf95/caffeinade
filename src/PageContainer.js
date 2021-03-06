import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import NavBar from './NavBar';
import { PageContent } from './Enums';
import About from './About';
import Events from './Events';

class PageContainer extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <NavBar />
                    {this.props.content === PageContent.HOME && <Home />}
                    {this.props.content === PageContent.ABOUT && <About />}
                    {this.props.content === PageContent.EVENTS && <Events />}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default PageContainer;
