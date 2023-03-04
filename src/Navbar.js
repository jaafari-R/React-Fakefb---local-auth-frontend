import React, {Component} from 'react';

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';

class Navbar extends React.Component {
    render() {
        return (
            <div class="bg-primary">
                <div class="row text-danger nav">
                    <h1 id="title" class="offset-md-1 col-md-5 ">Fake FB</h1>
                    <Login />
                </div>
            </div>
        )
    }
}

export default Navbar;