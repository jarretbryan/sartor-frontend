import React, { Component } from 'react';
import Look from './Look';
import LookForm from './LookForm';
import LookAdapter from '../api/LookAdapter'
import LookSpec from './LookSpec';


class LookList extends Component {

    state = {
        submitting:false,
        SpecDisplay: false,
        LookSpecToDisplay: {},
        userID: this.props.userId, 
        LookList: []
    }


    // lifecycle method is run both on mount and update
    static getDerivedStateFromProps(props,state) {
        console.log(props)
        console.log(state)
        if (state.userID !== props.userId){
            return {
                ...state,
                userID: props.userId,
                LookList: props.looks
            }
        } else {
            return null;
        }
    }
    

    mapLooks = () => {
        return this.state.LookList.map((look) => <Look key={look.id} look={look} onClick={this.clickView}/>) 
    }

    // this will render optimistically, but the newlookObj
    // has no id, so viewing it will break 
    submitNewLook = (newlookObj) => {
        LookAdapter.postLook(newlookObj).then(this.setState({
            submitting: false,
            LookList: [...this.state.LookList, newlookObj]
        }))
    }

    deleteLook = (idNum) => {
        LookAdapter.deleteLook(idNum)
        this.setState({
            SpecDisplay: false,
            LookList:[...this.state.LookList].filter(lookObj => lookObj.id !== idNum)
        })
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
            return <LookSpec look={this.state.LookSpecToDisplay} onClick={this.hideSpec} deleteLook={this.deleteLook}/>
        }
    }
    
    render() {
        // console.log(this.state.LookList)
        // console.log(this.props.looks)
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
