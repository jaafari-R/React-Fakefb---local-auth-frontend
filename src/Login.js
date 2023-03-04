import React from "react";


class Login extends React.Component {
    render() {
        return (
        <form class="col-md-6" action="">
            <input class="login" type="text" />
            <input class="login" type="text" />
            <button class="login">Login</button>
        </form>
        );
    }
}

export default Login;