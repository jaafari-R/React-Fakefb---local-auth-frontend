import React from 'react';
import { redirect } from 'react-router-dom';

class Dashboard extends React.Component {

    constructor() {
        super();

        // Init
        let user = localStorage.getItem('login') || undefined;
        console.log(user);
        if(!user)
            window.location.replace('/');
        user = JSON.parse(user); 
        //

        this.state = {
            user: user
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.user.name}</h1>
            </div>
        );
    }
}

export default Dashboard;