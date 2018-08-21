import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import UserAdapter from './api/UserAdapter';


class App extends Component {

  state = {
    loggedIn: false,
    currentPage: '',
    idNum: null
  }

  signIn = (username) => {
    UserAdapter.postUser(username)
    .then(res => this.setState({
      loggedIn: true,
      idNum: res.id,
      currentPage: `profile/${res.id}`
    }))
  }

  renderLoginForm = () => {
    if (this.state.loggedIn === false){
      return <SignIn signIn={this.signIn} />
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          
            <Navbar />
            {this.renderLoginForm()}
          <Route path="/profile" render={() => <UserPage id={this.state.idNum} />} />      
          {/* <UserPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
