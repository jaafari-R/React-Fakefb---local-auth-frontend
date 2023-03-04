import React, {Component} from "react";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div class="bg-primary">
                <div class="row text-danger nav">
                    <h1 id="title" class="offset-md-1 col-md-5 ">Fake FB</h1>
                    <form class="col-md-6" action="">
                        <input class="login" type="text" />
                        <input class="login" type="text" />
                        <button class="login">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Navbar;