import React, { Component } from 'react';
import Look from './Look';
import LookForm from './LookForm';
import LookAdapter from '../api/LookAdapter'
import LookSpec from './LookSpec';


class LookList extends Component {

    state = {
        submitting:false,
        SpecDisplay: false,
        LookSpecToDisplay: {}
    }
    

    mapLooks = () => {
        return this.props.looks.map((look) => <Look key={look.id} look={look} onClick={this.clickView}/>) 
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
            return <button className='btn #424242 grey darken-3 waves-light submit-fixed' onClick={() => {
                this.setState({
                    submitting: true
                })
            }}>Submit New Look </button>
        }
    }

    

    clickView = (obj) => {
        // let that = this;
       
        this.setState({
            SpecDisplay: true,
            LookSpecToDisplay: obj
        }, window.scroll(0,0))
    }

    hideSpec = () => {
        this.setState({
            SpecDisplay: false,
            LookSpecToDisplay: null
        })
    }


    renderLookSpec = () => {
        if (this.state.SpecDisplay === true){
            return <LookSpec look={this.state.LookSpecToDisplay} onClick={this.hideSpec}/>
        }
    }
    
    render() {
        return (
            <div className='look-list'>
                {this.renderLookSpec()}
                {this.renderSubmitForm()}
                {this.mapLooks()}
            </div>
        );
    }
}

export default LookList;
