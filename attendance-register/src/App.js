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

  }

  handleChange(event, type) {
    event.preventDefault();
    let formData = event.target.value;

    if (type === 0) this.setState({ firstname: formData });
    else if (type === 1) this.setState({ surname: formData });
    else this.setState({ notes: formData });

    this.setState({ date: moment().format('dddd, MMMM Do YYYY') });
    this.setState({ time: moment().format('LT') });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          First name: <br />
          <input type="text" onChange={event => this.handleChange(event, 0)} className="firstname" /><br />
          Surname: <br />
          <input type="text" onChange={event => this.handleChange(event, 1)} className="surname" /><br />
          Notes: <br />
          <input type="input" name="notes" onChange={event => this.handleChange(event, 2)} className="notes" /><br />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    );
  }
}

export default App;
