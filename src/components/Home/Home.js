import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Home extends Component {
    constructor(props){
        super(props);
    }

    handleSinOut = () => {
        console.log("signOut")
    }

    render() { 
        const { authenticated } = this.props;
        return ( 
            <div>
                <h1>
                    { authenticated ? "Welcome" : "You are not signed in" }
                </h1>
                <ul>
                    <li>
                        <Link to = '/public'>
                            Public Page
                        </Link>
                    </li>
                    <li>
                        <Link to = '/protected'>
                            Protected Page
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        authenticated: store.user.authenticated,
        authenticating: store.user.authenticating
    }
}

export default connect(mapStateToProps)(Home);