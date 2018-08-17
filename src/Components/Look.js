import React, { Component } from 'react';

class Look extends Component {


    render() {
        return (
            <div className='card'>
                    <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img src={this.props.look.lookURL} alt={this.props.look.title}/>
                </div>
            </div>
        );
    }
}

export default Look;
