import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <li className = 'container'>
               <div className="collapsible-header"> 
                    <button className="btn #424242 grey darken-3 waves-light">
                        
                        <a href={this.props.linkInfo.linkURL} className="collection-item active" target="_blank">{this.props.linkInfo.article}</a>
                    
                    </button>
                    <hr/>
                    <button onClick={() => this.props.deleteLink(this.props.linkInfo.id)} className="#bf360c deep-orange darken-4 waves-light">Remove Link</button>
                </div>       
            </li>
        );
    }
}

export default Link;
