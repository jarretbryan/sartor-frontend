import React, { Component } from 'react';

class LinkForm extends Component {
    
    state = {
        article: '',
        linkURL: '',
        look_id: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.setState({
                    look_id: this.props.lookId
                }, () => this.props.onSubmit(this.state) )
            }} >
                <label> Link Your Look </label>
                <input type="text" name="article" placeholder="article" value={this.state.article} onChange={this.handleChange} required />
                <input type="text" name="linkURL" placeholder="link!" value={this.state.linkURL} onChange={this.handleChange}  required />

                <button className='btn #424242 grey darken-3 waves-light' type="submit"> Link Your Look </button>
            </form>  
        );
    }
}

export default LinkForm;
