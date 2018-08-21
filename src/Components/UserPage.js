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
        UserAdapter.showUser(this.props.id).then(res => this.setState({
            userObj: res
        }))
    }

    renderLookList = () => {
        if (this.userObj.id){
            return <div>
                <LookList userId={this.state.userObj.id} looks={this.state.userObj.looks} />
            </div>
        } else {
            return <div> Go Log</div>
        }
    }

  

    render() {
        return (
            <div>
                <LookList userId = {this.state.userObj.id} looks={this.state.userObj.looks}/>
            </div>
        );
    }
}

export default UserPage;
