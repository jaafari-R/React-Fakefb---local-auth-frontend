import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';

class Navbar extends React.Component {
    render() {
        return (

            <div class="bg-primary">
            <div class="row text-danger nav">
                <h1 id="title" class="offset-md-1 col-md-5 ">Fake FB</h1>
                
                <Routes>
                    <Route exact path="/" element={<Login />}/>
                    <Route exact path="/dashboard" element={<Logout />}/>
                </Routes>
            </div>
            </div>
        )
    }
}

export default Navbar;