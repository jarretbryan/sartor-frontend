import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar-fixed ">
            
            <nav className="header">
            <h3 className="left">Sartor & Patch ✂ </h3>
                <ul className ="right hide-on-med-and-down">
                        <li><NavLink activeClassName="active" to="/profile">Profile</NavLink></li>
                        <li><NavLink onClick={this.props.logOut} activeClassName="active" to="/logout">Logout</NavLink></li>
                    {/* <li><a href="login">Login </a></li> */}
                </ul>
            </nav>
            
        </div>
            
        );
    }
}

export default Navbar;
