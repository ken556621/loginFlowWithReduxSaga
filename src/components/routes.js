import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';

export default (
    <div>
        <Switch>
            <Route path = '/' component={ Home } />
        </Switch>  
    </div>
)