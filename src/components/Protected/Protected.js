import React, { Component } from 'react';

import Home from '../Home/Home';

class Protected extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <>
                <Home />
                <h3>
                    Protected
                </h3>
            </>
        );
    }
}
 
export default Protected;