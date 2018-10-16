import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

class App extends Component {

  state = {
    firstname: "",
    surname: "",
    notes: "",
    date: "",
    time: ""
  }



  handleSubmit() {
    console.log(moment().format('dddd, MMMM Do YYYY'));
    console.log(moment().format('LT'));
  }


  handleChange(event, type) {
    event.preventDefault();
    let formData = event.target.value;

    if (type === 0) this.setState({ firstname: formData });
    else if (type === 1) this.setState({ surname: formData });
    else this.setState({ notes: formData });

  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          First name: <br />
          <input type="text" name="firstname" onChange={event => this.handleChange(event, 0)} /><br />
          Surname: <br />
          <input type="text" name="surname" onChange={event => this.handleChange(event, 1)} /><br />
          Notes: <br />
          <input type="input" name="notes" onChange={event => this.handleChange(event, 2)} /><br />
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
