import React, { Component } from 'react';
import { connect } from "react-redux";

import Home from '../Home/Home';
import Button from '../shared/Button';

class Login extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <>
                <Home />
                { 
                    authenticated ? 
                    null : 
                    <h3>
                        You must sign in to view the page at/protected
                    </h3>
                }
                { authenticated ? <Button text = { "Sign Out" } cb = { this.handleSinOut }/> : <Button text = { "Sign In" } cb = { this.handleSinIn } /> }
            </>
        );
    }
}

function mapStateToProps(store){
    return {
        authenticated: store.user.authenticated,
        authenticating: store.user.authenticating
    }
}

export default connect(mapStateToProps)(Login);