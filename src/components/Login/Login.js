import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import Home from '../Home/Home';
import SignInForm from '../SignInForm/SignInForm';
import Button from '../shared/Button';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSignInForm: false
        }
    }

    showSignInForm = () => {
        this.setState({
            isSignInForm: true
        })
    }

    closeSignInForm = () => {
        this.setState({
            isSignInForm: false
        })
    }

    render() { 
        const { isSignInForm } = this.state;
        return ( 
            <>
                { isSignInForm ? <SignInForm closeSignInForm = { this.closeSignInForm }/> :
                    <Fragment>
                        <Home />
                        <h3>
                            You must sign in to view the page at/protected
                        </h3>
                        <Button text = { "Sign In" } cb = { this.showSignInForm } />
                    </Fragment>
                }
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