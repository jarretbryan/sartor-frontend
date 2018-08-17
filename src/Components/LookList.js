import React, { Component } from 'react';
import Look from './Look';

class LookList extends Component {
    

    mapLooks = () => {
        return this.props.looks.map((look) => <Look key={look.id} look={look}/>) 
    }
    
    render() {
        return (
            <div>
                {this.mapLooks()}
            </div>
        );
    }
}

export default LookList;
