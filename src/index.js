import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className="App">
            <Route exact path="/" component={App} />{' '}
            <Route exact path="/about" component={App} />{' '}
            <Route exact path="/events" component={App} />{' '}
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
