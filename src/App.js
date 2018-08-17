import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Navbar />
        
        <p className="App-intro">
          
        </p>
        
        <UserPage />
      </div>
    );
  }
}

export default App;
