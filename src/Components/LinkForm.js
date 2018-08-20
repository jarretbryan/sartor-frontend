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
            <form >
                <label> Link Your Look </label>
                <input type="text" name="article" placeholder="title your look" value={this.state.article} onChange={this.handleChange} />
                <input type="text" name="linkURL" placeholder="link!" value={this.state.linkURL} onChange={this.handleChange} />

                <button className='btn #424242 grey darken-3 waves-light' type="submit"> Link Your Look </button>
            </form>  
        );
    }
}

export default LinkForm;
