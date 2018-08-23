import React, { Component } from 'react';

class Look extends Component {

    viewButton = () => {
        if (this.props.onClick !== undefined){
            return <button onClick={() => this.props.onClick(this.props.look)} className='btn #424242 grey darken-3 waves-light'>View</button>
        } else {
            return <p onCLick={this.props.onClick}> by {this.props.look.user.username}</p>
        }
    }


    render() {
        return (
            <div className='card'>
                    <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img className='look-image' src={this.props.look.lookURL} alt={this.props.look.title}/><br/>
                    {this.viewButton()}
                </div>
            </div>
        );
    }
}

export default Look;
