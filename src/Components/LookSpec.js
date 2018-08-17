import React, { Component } from 'react';
import lookAdapter from '../api/LookAdapter';
import Link from './Link';

class LookSpec extends Component {

    state = {
        links: []
    }


    componentDidMount(){
        lookAdapter.show(this.props.look.id)
        .then(res => this.setState({
            links: res.links
        }))
    }

    mapLinks = () => {
        return this.state.links.map(obj => <Link key={obj.id} linkInfo={obj}/>)
    }


    render() {
        return (
            <div className='full-card'>
                <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img className='look-image' src={this.props.look.lookURL} alt={this.props.look.title} /><br />
                    <ul className="collapsible">
                        {this.mapLinks()}
                    </ul>
                    <button onClick={() => this.props.onClick()}> Close </button>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default LookSpec;
