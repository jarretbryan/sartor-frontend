import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <li className = 'container'>
               <div className="collapsible-header"> 
                    <p className="collection-item">{this.props.linkInfo.article}</p>
                </div>
                <div className="collapsible-body">
                    <a href={this.props.linkInfo.linkURL} className="collection-item active">Here</a>
                </div>
                
            </li>
        );
    }
}

export default Link;
