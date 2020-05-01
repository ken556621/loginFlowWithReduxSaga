import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Public from './Public/Public';
import Login from './Login/Login';
import Protected from './Protected/Protected';
import Auth from './shared/Auth';

export default (
    <Switch>
        <Route path = '/public' component={ Public } />
        <Route path = '/login' component={ Login } />
        <Route path = '/protected' component={ Auth(Protected) } />
        <Route path = '/' component={ Home } />
    </Switch>  
)