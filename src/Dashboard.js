import React from 'react';

class Dashboard extends React.Component {

    constructor() {
        this.state = {
            user: {
                email: '',
                name: ''
            }
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('login'));
        this.setState({user: {...user}});
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