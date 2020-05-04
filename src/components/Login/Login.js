import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import SignInForm from './SignInForm';
import Button from '../shared/MyButton';

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
        const { history } = this.props;
        return ( 
            <>
                { isSignInForm ? <SignInForm closeSignInForm = { this.closeSignInForm } history = { history } /> :
                    <>
                        <Home />
                        <h3>
                            You must sign in to view the page at/protected
                        </h3>
                        <Button text = { "Sign In" } cb = { this.showSignInForm } />
                    </>
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