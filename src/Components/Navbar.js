import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar-fixed ">
            
            <nav className="header">
            <h3 className="left">Sartor & Patch</h3>
                <ul className ="right hide-on-med-and-down">
                    <li><a href="#home">Home </a></li>
                    <li><a href="#explore">Social </a></li>
                    <li><a href="#home">Login </a></li>
                </ul>
            </nav>
            
        </div>
            
        );
    }
}

export default Navbar;
