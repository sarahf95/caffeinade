import React, { Component } from 'react';
import './App.css';
import PageContainer from './PageContainer';
import { Routes, PageContent } from './Enums';
class App extends Component {
    render() {
        let path = window.location.href.split('/')[3];
        let content = '';
        switch (path) {
        case Routes.ABOUT:
            content = PageContent.ABOUT;
            break;
        case Routes.CONTACT:
            content = PageContent.CONTACT;
            break;
        case Routes.EVENTS:
            content = PageContent.EVENTS;
            break;
        default:
            content = PageContent.HOME;
            break;
        }
        return (
            <div className="App">
                <PageContainer content={content} />
            </div>
        );
    }
}

export default App;
