import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        username: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className= "signin-form">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.signIn(this.state.username)
                    }}>
                    <label> Enter Your Username or Create a New One</label>
                    <input type="text" name="username" placeholder="enter your username" value={this.state.username} onChange={this.handleChange} required />
              

                    <button className='btn #424242 grey darken-3 waves-light' type="submit"> "Suit Up"</button>
                </form> 
                
            </div>
        );
    }
}

export default SignIn;
