import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGIN_FAIL } from '../actions/Constants';
import { logInRequest } from '../actions/UserAction';
import styled from 'styled-components';
import Modal from '@trendmicro/react-modal';
import { Button } from '@trendmicro/react-buttons';

import '@trendmicro/react-modal/dist/react-modal.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';

const FormGroup = styled.div`
    margin-bottom: 8px;
`;

const Input = styled.input`
    display: inline-block;
    width: 100%;
    padding: 5px 12px;
    font-size: 13px;
    color: #222222;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #cccccc;
    border-radius: 3px;
`;

const Error = styled.div`
    display: block;
    color: #db3d44;
    margin-top: 4px;
`;

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }

    handleChange = (e) => {
        if(e.target.name === "userName"){
            this.setState({
                userName: e.target.value
            })
        }else if(e.target.name === "password"){
            this.setState({
                password: e.target.value
            })
        }
    }

    handleSubmit = () => {
        const { userName, password } = this.state;
        const { dispatch, history } = this.props;
        if(userName.trim() !== "guest"){
            dispatch({ type: LOGIN_FAIL })
            return
        }
        if(password.trim() !== "guest"){
            dispatch({ type: LOGIN_FAIL })
            return
        }
        dispatch(logInRequest(userName, password, () => history.push("/protected")));
    }

    render() { 
        const { closeSignInForm } = this.props;
        return ( 
            <Modal onClose={ closeSignInForm }>
                <Modal.Header>
                    <Modal.Title>
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <label>Username</label>
                        <div>
                            <Input onChange={ this.handleChange } name="userName" type="text" placeholder="Enter username" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <div>
                            <Input onChange={ this.handleChange } name="password" type="password" placeholder="Enter password" />
                        </div>
                    </FormGroup>
                    <Error>Incorrect username or password.</Error>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { closeSignInForm } btnStyle="flat">
                        Cancel
                    </Button>
                    <Button onClick = { this.handleSubmit } btnStyle="primary">
                        Sign In
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(store){
    return {
        authenticated: store.user.authenticated,
        authenticating: store.user.authenticating
    }
}
 
export default connect(mapStateToProps)(SignInForm);