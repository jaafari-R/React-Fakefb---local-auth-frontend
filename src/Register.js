import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Register extends React.Component {
    render()
    {
        return (
            <div class="text-center">
                <br />
                <br />
                <h2>Register</h2>
                <br />
                <div class="row">
                    <form action="" class="offset-md-4 col-md-4">
                        <input class="form-control" type="email" placeholder="Email"/>
                        <br />
                        <input class="form-control" type="name" placeholder="Name"/>
                        <br />
                        <input class="form-control" type="password" placeholder="Password"/>
                        <br />
                        <input class="form-control" type="conf-password" placeholder="Confitm Password"/>
                        <br />
                        <button class="form-control btn btn-success">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;