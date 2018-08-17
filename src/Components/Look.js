import React, { Component } from 'react';

class Look extends Component {


    render() {
        return (
            <div className='card'>
                    <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img className='look-image' src={this.props.look.lookURL} alt={this.props.look.title}/><br/>
                    <button onClick={() => this.props.onClick(this.props.look)} className='btn #424242 grey darken-3 waves-light'>View</button>
                </div>
            </div>
        );
    }
}

export default Look;
