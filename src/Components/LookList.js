import React, { Component } from 'react';
import Look from './Look';
import LookForm from './LookForm';
import LookAdapter from '../api/LookAdapter'


class LookList extends Component {

    state = {
        submitting:false
    }
    

    mapLooks = () => {
        return this.props.looks.map((look) => <Look key={look.id} look={look}/>) 
    }

    submitNewLook = (newlookObj) => {
        LookAdapter.postLook(newlookObj).then(this.setState({
            submitting: false
        }))
    }

    renderSubmitForm = () => {
        if (this.state.submitting === true){
            return <LookForm userId={this.props.userId} onSubmit={this.submitNewLook} />
        } else {
            return <button onClick={() => {
                this.setState({
                    submitting: true
                })
            }}>Submit New Look </button>
        }
    }
    
    render() {
        return (
            <div>
                {this.renderSubmitForm()}
                {this.mapLooks()}
            </div>
        );
    }
}

export default LookList;
