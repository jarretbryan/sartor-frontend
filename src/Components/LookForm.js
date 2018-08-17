import React, { Component } from 'react';

class LookForm extends Component {
    
    state = {
        title: '',
        lookURL: '',
        user_id: null
    }

    // componentDidMount(){
    //     this.setState({
    //         user_id: this.props.userId
    //     })
    // }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    
    render() {
        console.log(this.props.userId)
        console.log(this.state)
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.setState({
                        user_id: this.props.userId 
                    }, () => this.props.onSubmit(this.state))
                } }>
                    <label> Add New Look! </label>
                    <input type="text" name="title" placeholder="title your look" value={this.state.title} onChange={this.handleChange} />
                    <input type="text" name="lookURL" placeholder="link your photo!" value={this.state.lookURL} onChange={this.handleChange} />
                    
                    <button type="submit"> Submit Your Look! </button>
                </form>                
            </div>
        );
    }
}

export default LookForm;
