import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedClass){
    class Auth extends Component {
        componentDidMount(){
            const { authenticated, authenticating, history } = this.props;
            if(!authenticating){
                if(authenticated){
                    console.log("Login")
                }else{
                    history.push("/login")
                }
            }else{
                if(!authenticated){
                    history.push("/login")
                }
            }
        }
  
        render() {
            const { authenticated, authenticating } = this.props;

            if(authenticating) {
                return <h1>Is loading</h1>
            } else {
                if(authenticated) {
                    console.log("auth")
                    return <ComposedClass {...this.props}/>
                } else {
                    return <div></div>
                }
 
            }
        }
    }
  
    function mapStateToProps(store) {
        return {
            authenticating: store.user.authenticating,
            authenticated: store.user.authenticated
        };
    }

    return connect(mapStateToProps)(Auth);
}