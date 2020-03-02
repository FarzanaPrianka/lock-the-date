import React, { Component } from 'react';

class BirthdayLogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: "",
            day: ""

        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBirthdayLog(this.state);
        this.setState({
            person: "",
            day: ""
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="person">Enter the Name</label>
                <input
                    type="text"
                    name="person"
                    placeholder="enter the name"
                    id="person"
                    value={this.state.person}
                    onChange={this.handleChange}
                />

                <label htmlFor="day">Enter the Name</label>
                <input
                    type="text"
                    name="day"
                    placeholder="enter the name"
                    id="day"
                    value={this.state.day}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }

}

export default BirthdayLogForm;