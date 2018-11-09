import React, { Component } from "react";
import "../styles/Home.css";
import Buy from "./Buy";

class Home extends Component {
    state = {
        option: "Buy",
    };

    setOption(event) {
        this.setState({ option: event.target.value });
    }

    render() {
        return (
            <div className="App">

                <header className="title">Compare Conveyancing Quotes</header>
                
                <div className='holder'>

                        <div onChange={event => this.setOption(event)}>
                            <input type="radio" value="Buy" name="options" /> Buy
                         <input type="radio" value="Buy-And-Sell" name="options" /> Buy And Sell
                         <input type="radio" value="Sell" name="options" /> Sell
                         <input type="radio" value="Remortgage" name="options" /> Remortgage
                  </div>

                        {this.state.option === "Buy" && <Buy />}
                </div>
            </div>
        );
    }
}

export default Home;
