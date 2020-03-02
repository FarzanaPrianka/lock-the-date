import React, { Component } from 'react';

//this component render a individual birthday log 

class BirthdayLog extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.person} {this.props.day}</li>

            </div>
        )
    }
}

export default BirthdayLog;

