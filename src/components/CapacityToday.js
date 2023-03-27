import React, {Component} from 'react';

export class CapacityToday extends Component {
    render(){
        return(
            <td>Today is {this.props.day} and there is {100-parseInt(this.props.traffic)}% available capacity left</td>
        )
    }
} 


//Higher order Component to be used inside other components