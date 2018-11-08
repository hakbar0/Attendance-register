import React, { Component } from "react";
import "../App.css";
import db from "../firebase";
import moment from "moment";

class Buy extends Component {
    state = {
        firstname: "",
        surname: "",
        email: "",
        number: "",
        callBack: "",
        buyingPrice: "",
        freeOrLease: "",
        isMortgage: "",
        isSecondOrInvestment: "",
        propertyLocation: "",
        isFirstTimeBuyer: ""
    };

    handleSubmit(event) {
        event.preventDefault();

        db.ref("/Buy").push({
            firstname: this.state.firstname,
            surname: this.state.surname,
            email: this.state.email,
            number: this.state.number,
            callBack: this.state.callBack,
            buyingPrice: this.state.buyingPrice,
            freeOrLease: this.state.freeOrLease,
            isMortgage: this.state.isMortgage,
            isSecondOrInvestment: this.state.isSecondOrInvestment,
            propertyLocation: this.state.propertyLocation,
            isFirstTimeBuyer: this.state.isFirstTimeBuyer,
            date: moment().format("dddd, MMMM do YYYY"),
            time: moment().format("LT")
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    First name: <br />
                    <input type="text" onChange={event => this.setState({ firstname: event.target.value })} className="firstname" />
                    <br />

                    Surname: <br />
                    <input type="text" onChange={event => this.setState({ surname: event.target.value })} className="surname" />
                    <br />

                    E-mail: <br />
                    <input type="text" onChange={event => this.setState({ email: event.target.value })} className="surname" />
                    <br />

                    Number: <br />
                    <input type="text" onChange={event => this.setState({ number: event.target.value })} className="surname" />
                    <br />

                    <div onChange={event => this.setState({ callBack: event.target.checked })}>
                        Would you like to be connected by phone? <br />
                        <input type="Checkbox" name="Contact" />
                    </div>

                    Buying Price: <br />
                    <input type="text" onChange={event => this.setState({ buyingPrice: event.target.value })} className="buy" />

                    <div onChange={event => this.setState({ freeOrLease: event.target.value })}>
                        The property is: <br />
                        <input type="radio" value="Freehold" name="freehold-or-leasehold" /> Freehold
                    <input type="radio" value="Leasehold" name="freehold-or-leasehold" /> Leasehold
                </div>

                    <div onChange={event => this.setState({ isMortgage: event.target.value })}>
                        Buying with a Mortgage? <br />
                        <input type="radio" value="True" name="is-mortgage" /> Yes
                    <input type="radio" value="False" name="is-mortgage" /> No
                </div>

                    <div onChange={event => this.setState({ isSecondOrInvestment: event.target.value })}>
                        Is this a second or investment property purchase? <br />
                        <input type="radio" value="True" name="is-second-or-investment" /> Yes
                    <input type="radio" value="False" name="is-second-or-investment" /> No
                </div>

                    <div onChange={event => this.setState({ propertyLocation: event.target.value })}>
                        Where is your property located? <br />
                        <input type="radio" value="England" name="location" /> England
                    <input type="radio" value="Wales" name="location" /> Wales
                </div>

                    <div onChange={event => this.setState({ isFirstTimeBuyer: event.target.value })}>
                        Are you a first time buyer? <br />
                        <input type="radio" value="True" name="buyer" /> Yes
                    <input type="radio" value="False" name="buyer" /> No
                </div>
                    <input type="submit" value="Get Quote" className="submit" />
                </form>
            </div>
        );
    }
}

export default Buy;