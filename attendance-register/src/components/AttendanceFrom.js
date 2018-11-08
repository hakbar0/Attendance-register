import React, { Component } from "react";
import "../App.css";
import Buy from "./Buy";

class AttendanceForm extends Component {
    state = {
        option: "Buy",
    };

    setOption(event) {
        event.preventDefault();
        this.setState({ option: event.target.value });
    }

    render() {
        return (
            <div className="App">

                <div onChange={event => this.setOption(event)}>
                    <input type="radio" value="Buy" name="options" /> Buy
                         <input type="radio" value="Buy-And-Sell" name="options" /> Buy And Sell
                         <input type="radio" value="Sell" name="options" /> Sell
                         <input type="radio" value="Remortgage" name="options" /> Remortgage
                  </div>

                {this.state.option === "Buy" ? <Buy /> : null}
            </div>
        );
    }
}

export default AttendanceForm;
