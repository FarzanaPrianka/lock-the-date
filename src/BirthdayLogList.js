import React, { Component } from 'react';
import BirthdayLog from './BirthdayLog';
import BirthdayLogForm from './BirthdayLogForm';

class BirthdayLogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthdayLogs: [
                { person: "Mom", day: "10th March" },
                { person: "Dad", day: "1st January" }
            ]
        };
    }

    create = (newBirthdayLog) => {
        this.setState({
            birthdayLogs: [...this.state.birthdayLogs, newBirthdayLog]

        })

    }
    render() {
        const birthdayLogs = this.state.birthdayLogs.map(birthdayLog => {
            return <BirthdayLog person={birthdayLog.person} day={birthdayLog.day} />
        });
        return (
            <div>
                <h1>Lock the Date</h1>
                <BirthdayLogForm createBirthdayLog={this.create} />
                <ul>
                    {birthdayLogs}
                </ul>

            </div>
        )
    }
}

export default BirthdayLogList;