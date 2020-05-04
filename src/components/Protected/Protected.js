import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../actions/Constants';
import Mybutton from '../shared/MyButton'; 

import Home from '../Home/Home';

class Protected extends Component {
    handleSignOut = () => {
        const { dispatch, history } = this.props;
        dispatch({ type: LOGOUT });
        history.push("/");
    }

    render() { 
        return ( 
            <>
                <Mybutton text = { "Sign Out" } cb = { this.handleSignOut }/>
                <Home />
                <h3>
                    Protected
                </h3>
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
 
export default connect(mapStateToProps)(Protected);