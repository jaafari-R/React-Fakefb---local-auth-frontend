import React from 'react';
import { Navigate } from 'react-router-dom';

class Dashboard extends React.Component {

    constructor() {
        super();

        // Init
        let user = localStorage.getItem('login') || undefined;
        if(user)
            user = JSON.parse(user); 
        //

        this.state = {
            user: user
        }
    }

    render() {
        if(!this.#isLoggedIn())
            return <Navigate to='/'/>;

        return (
            <div class="text-center">
                <h1>Welcome {this.state.user.name}</h1>
            </div>
        );
    }

    #isLoggedIn()
    {
        if(this.state.user)
            return true;
        return false;
    }
}

export default Dashboard;