import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN_FAIL, LOGIN_CANCEL } from '../actions/Constants';
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
            password: "",
            emptyUserName: false,
            emptyPassword: false,
            invalid: false
        }
    }

    handleChange = (e) => {
        if(e.target.name === "userName"){
            if(e.target.value === ""){
                this.setState({
                    emptyUserName: true
                })
            }else{
                this.setState({
                    emptyUserName: false
                })
            }
            this.setState({
                userName: e.target.value
            })
        }else if(e.target.name === "password"){
            if(e.target.value === ""){
                this.setState({
                    emptyPassword: true
                })
            }else{
                this.setState({
                    emptyPassword: false
                })
            }
            this.setState({
                password: e.target.value
            })
        }
    }

    handleSubmit = () => {
        const { userName, password } = this.state;
        const { dispatch, history } = this.props;
        if(userName.trim() !== "guest"){
            this.setState({
                invalid: true
            })
            dispatch({ type: LOGIN_FAIL })
            return
        }
        if(password.trim() !== "guest"){
            this.setState({
                invalid: true
            })
            dispatch({ type: LOGIN_FAIL })
            return
        }
        dispatch(logInRequest(userName, password, () => history.push("/protected")));
    } 

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit()
        }
    }

    handleCancel = () => {
        const { closeSignInForm, dispatch } = this.props;
        dispatch({ type: LOGIN_CANCEL });
        closeSignInForm();
    }

    render() { 
        const { emptyUserName, emptyPassword, invalid } = this.state;
        return ( 
            <Modal onClose={ this.handleCancel }>
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
                    { emptyUserName ? <Error>This is required field!</Error> : null }
                    <FormGroup>
                        <label>Password</label>
                        <div>
                            <Input onChange={ this.handleChange } onKeyDown = { this.handleKeyDown } name="password" type="password" placeholder="Enter password" />
                        </div>
                    </FormGroup>
                    { emptyPassword ? <Error>This is required field!</Error> : null }
                    { invalid ? <Error>Incorrect username or password.</Error> : null }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { this.handleCancel } btnStyle="flat">
                        Cancel
                    </Button>
                    { emptyUserName || emptyPassword ?
                        <Button onClick = { this.handleSubmit } disabled btnStyle="primary">
                            Sign In
                        </Button> :
                        <Button onClick = { this.handleSubmit } btnStyle="primary">
                            Sign In
                        </Button> 
                    }
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