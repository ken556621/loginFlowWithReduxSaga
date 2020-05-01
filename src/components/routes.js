import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Public from './Public/Public';
import Protected from './Protected/Protected';

export default (
    <div>
        <Switch>
            <Route path = '/public' component={ Public } />
            <Route path = '/protected' component={ Protected } />
            <Route path = '/' component={ Home } />
        </Switch>  
    </div>
)