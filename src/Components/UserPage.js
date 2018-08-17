import React, { Component } from 'react';
import UserFetch from '../api/UserAdapter';

class UserPage extends Component {

    state ={
        userObj: {}
    }

    componentDidMount(){
        UserFetch.showUser(2).then(res => this.setState({
            userObj: res
        }))
    }

    render() {
        return (
            <div>
                HELLO
            </div>
        );
    }
}

export default UserPage;
