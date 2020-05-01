import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Routes from './routes';
import './shared/global.css';

const history = createBrowserHistory();

class AppContainer extends Component {
    render() { 
        return ( 
            <Router history = { history }>
                { Routes }
            </Router>
        );
    }
}
 
export default AppContainer;