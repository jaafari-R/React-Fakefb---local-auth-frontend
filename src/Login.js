import React from "react";
import { Navigate } from "react-router-dom";

import swal from "sweetalert";

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            },
            redirect: ''
        }
    }

    login(e) {
        e.preventDefault();

        this.setState({user: {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }}, () => {
            const validate = this.#validateUser();
            if(validate != 'Valid')
            {
                swal(validate, ':(', 'error');
                return;
            }

            const auth = this.#authenticate();
            if(!auth)
            {
                swal('Invalid Credintials!', ':(', 'error');
            }
        })
    }

    render() {
        return (
        <form class="col-md-6" onSubmit={(e) => this.login(e)}>
            <input id="email" class="login" type="email" name="email"/>
            <input id="password" class="login" type="text" name="password"/>
            <button class="login">Login</button>
            {this.state.redirect}
        </form>
        );
    }

    #validateUser() {
        if(!this.state.user.email)
            return 'Email is required!';
        if(!this.state.user.password)
            return 'Password is required!';
        
        return 'Valid'
    }

    #authenticate() {
        let user = localStorage.getItem('user') || undefined;
    
        if(!user)
            return false;
        user = JSON.parse(user);

        if(user.email === this.state.user.email
            && user.password === this.state.user.password)
        {
            localStorage.setItem(
                'login', JSON.stringify({
                    email: user.email,
                    name: user.name
                })
            );
            this.setState({redirect: <Navigate to='/dashboard'/>});
            return true;
        }
        return false;
    }
}

export default Login;