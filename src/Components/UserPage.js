import React, { Component } from 'react';
import UserFetch from '../api/UserAdapter';
import LookList from './LookList';


class UserPage extends Component {

    state ={
        userObj: {
            looks: []
        }
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
                <LookList looks={this.state.userObj.looks}/>
            </div>
        );
    }
}

export default UserPage;
