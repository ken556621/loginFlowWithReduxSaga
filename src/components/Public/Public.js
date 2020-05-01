import React, { Component } from 'react';

import Home from '../Home/Home';

class Public extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (  
           <>
            <Home />
            <h3>
                Public
            </h3>
           </> 
        );
    }
}
 
export default Public;