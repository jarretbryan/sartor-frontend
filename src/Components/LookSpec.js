import React, { Component } from 'react';

class LookSpec extends Component {


    render() {
        return (
            <div className='full-card'>
                <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img className='look-image' src={this.props.look.lookURL} alt={this.props.look.title} /><br />
                    <button onClick={() => this.props.onClick()}> Close </button>
                    <hr/>
                    {/* links will go here - must map over loook links in a method here */}
                </div>
            </div>
        );
    }
}

export default LookSpec;
