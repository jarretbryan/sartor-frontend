import React, { Component } from 'react';
import lookAdapter from '../api/LookAdapter';
import Link from './Link';
import LinkForm from './LinkForm';
import LinkAdapter from '../api/LinkAdapter';

class LookSpec extends Component {

    state = {
        links: [],
        newLink: false
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

    changeLinkState = () => {
        if (this.state.newLink === false){
            this.setState({
                newLink: true
            })
        } else {
            this.setState({
                newLink:false
            })
        }
    }

    renderLinkForm = () => {
        if (this.state.newLink === true){
            return < LinkForm onSubmit={this.submitLink} lookId={this.props.look.id}/>
        }
    }

    submitLink = (linkObj) => {
        return LinkAdapter.postLink(linkObj)
    }


    render() {
        return (
            <div className='full-card'>
                <h1 className='card-title'>{this.props.look.title}</h1>
                <div className='card-image'>
                    <img className='full-image' src={this.props.look.lookURL} alt={this.props.look.title} /><br />
                    <button onClick={() => this.props.onClick()}> Close </button>
                    <button onClick={() => lookAdapter.deleteLook(this.props.look.id) }> Delete This Look </button>
                    <ul className="">
                        {this.mapLinks()}
                    </ul>
                    <button onClick={this.changeLinkState}>Add New Link!</button>
                    {this.renderLinkForm()}
                    <hr/>
                </div>
            </div>
        );
    }
}

export default LookSpec;
