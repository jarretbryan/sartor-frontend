import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import UserAdapter from './api/UserAdapter';


class App extends Component {

  state = {
    loggedIn: false,
    path: '',
    idNum: null
  }

  signIn = (username) => {
    UserAdapter.postUser(username)
    .then(res => this.setState({
      loggedIn: true,
      idNum: res.id,
      path: `profile/${res.id}`
    }))
  }

  logOut = () => {
    this.setState({
      loggedIn: false,
      path: '',
      idNum: null
    });
  }


  renderLoginForm = () => {
    if (this.state.loggedIn === false){
      return <SignIn signIn={this.signIn} />
    } else {
      return <Redirect to={this.state.path} />
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          
            <Navbar logOut={this.logOut}/>
            {this.renderLoginForm()}
          <Route path="/profile" render={() => <UserPage id={this.state.idNum} />} />      
          {/* <UserPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
