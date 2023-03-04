import React from 'react';
import { Navigate } from 'react-router';

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Logout.css'

class Logout extends React.Component {

    constructor() {
        super();

        this.state = {
            redirect: ''
        }

        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem('login');
        this.setState({redirect: <Navigate to='/'/>});
    }

    render() {
        return (
            <div class="col-md-6 text-center">
                {this.state.redirect}
                <button class="logout btn btn-secondary" onClick={this.logout}> Logout </button>
            </div>
        );
    }
}

export default Logout;