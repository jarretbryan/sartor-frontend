import React, { Component } from 'react';

class Look extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.look.title}</h1>
                <img src={this.props.look.lookURL} alt={this.props.look.title}/>
            </div>
        );
    }
}

export default Look;
