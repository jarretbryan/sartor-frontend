import React, { Component, Fragment } from 'react';
import lookAdapter from '../api/LookAdapter';
import Look from './Look';

class Sidebar extends Component {

    state = {
        LookList: [],
        update: false
    }
    
    componentDidMount() {
        lookAdapter.index().then(res => this.setState({
            LookList:res
        }))
    }

    // componentDidUpdate() {
    //     lookAdapter.index().then(res => this.setState({
    //         LookList: res
    //     }))
    // }

    // updateClick = () => {
    //     if (this.state.update === true){
    //         this.setState({
    //             update:false
    //         })
    //     } else {
    //         this.setState({
    //             update:true
    //         })
    //     }
    // }



    mapLooks = () => {
        let newArr = this.state.LookList.map((look) => <Look key={look.id} look={look} onClick={this.updateClick} />)

        let randomArr = [
            newArr[Math.floor(Math.random() * newArr.length)],
            newArr[Math.floor(Math.random() * newArr.length)]
        ]

        return randomArr
    }
    
    
    
    render() {
        return (
            <div className='look-list-2'> 
            <h4>Featured Looks</h4>     
                {this.mapLooks()}
            </div>
        );
    }
}

export default Sidebar;
