import React from "react";
import { Navigate } from "react-router-dom";

import swal from "sweetalert";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            user: {
                email: '123',
                name: '',
                password: ''
            }
        }
    }

    register(e) {
        e.preventDefault();

        this.setState({user: {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            password: document.getElementById('password').value
        }}, () => {
            const confirmPassword = document.getElementById('conf-password').value;

            const validate = this.#validateUser(confirmPassword);

            if(validate !== 'Valid')
            {
                swal(validate, ':(', 'error');
                return;
            }
    
            swal('Regisetered Successfully!', ':)', 'success');

            this.#saveUser();
        });
    }

    #saveUser()
    {
        localStorage.setItem('user', JSON.stringify(this.state.user));
    }

    render() {
        // Redirect to dashboard if already loggedin
        if(this.#isLoggedIn())
            return <Navigate to='/dashboard'/>

        return (
            <div class="text-center">
                <br />
                <br />
                <h2>Register</h2>
                <br />
                <div class="row">
                    <form onSubmit={(e) => this.register(e)} class="offset-md-4 col-md-4">
                        <input class="form-control" id="email" type="email" placeholder="Email"/>
                        <br />
                        <input class="form-control" id="name" type="name" placeholder="Name"/>
                        <br />
                        <input class="form-control" id="password" type="password" placeholder="Password"/>
                        <br />
                        <input class="form-control" id="conf-password" type="conf-password" placeholder="Confirm Password"/>
                        <br />
                        <button class="form-control btn btn-success">Register</button>
                    </form>
                </div>
            </div>
        );
    }

    #validateUser(confirmPassword)
    {
        if(!this.state.user.email)
            return 'Email is required!';
        if(!this.state.user.name)
            return 'Name is required!';
        if(!this.state.user.password)
            return 'Password is required!';
        if(!confirmPassword)
            return 'Confirm Password is required!';

        if(this.state.user.password !== confirmPassword)
            return 'Password and Confirm Password do not match!'

        return 'Valid';
    }

    #isLoggedIn() {
        if(localStorage.getItem('login'))
            return true;
        return false;
    }
}

export default Register;