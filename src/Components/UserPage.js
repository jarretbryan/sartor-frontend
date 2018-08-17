import React, { Component } from 'react';
import UserAdapter from '../api/UserAdapter';
import LookList from './LookList';


class UserPage extends Component {

    state ={
        userObj: {
            looks: []
        }
    }

    componentDidMount(){
        UserAdapter.showUser(2).then(res => this.setState({
            userObj: res
        }))
    }

    render() {
        return (
            <div>
                <LookList looks={this.state.userObj.looks}/>
            </div>
        );
    }
}

export default UserPage;
