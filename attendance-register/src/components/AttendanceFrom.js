import React, { Component } from "react";
import "../App.css";
import moment from "moment";
import db from "../firebase";

class AttendanceForm extends Component {
    state = {
        firstname: "",
        surname: "",
        notes: "",

    };

    handleSubmit(event) {
        event.preventDefault();

        db.ref("/Users").push({
            firstname: this.state.firstname,
            surname: this.state.surname,
            notes: this.state.notes,
            date: moment().format("dddd, MMMM Do YYYY"),
            time: moment().format("LT")
        });
    }

    handleChange(event, type) {
        event.preventDefault();
        let formData = event.target.value;

        if (type === 0) this.setState({ firstname: formData });
        else if (type === 1) this.setState({ surname: formData });
        else this.setState({ notes: formData });
    }

    setOptions(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div onChange={event => this.setOptions(event)}>
                         <input type="radio" value="Buy" name="options" /> Buy
                         <input type="radio" value="Buy-And-Sell" name="options" /> Buy And Sell
                         <input type="radio" value="Sell" name="options" /> Sell
                         <input type="radio" value="Remortgage" name="options" /> Remortgage
                  </div>
                    First name: <br />
                    <input
                        type="text"
                        onChange={event => this.handleChange(event, 0)}
                        className="firstname"
                    />
                    <br />
                    Surname: <br />
                    <input
                        type="text"
                        onChange={event => this.handleChange(event, 1)}
                        className="surname"
                    />
                    <br />
                    Notes: <br />
                    <input
                        type="input"
                        name="notes"
                        onChange={event => this.handleChange(event, 2)}
                        className="notes"
                    />
                    <br />
                    <input type="submit" value="Submit" className="submit" />
                </form>
            </div>
        );
    }
}

export default AttendanceForm;
