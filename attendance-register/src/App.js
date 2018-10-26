import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AttendanceForm from './components/AttendanceFrom';
import PeoplePresent from './components/PeoplePresent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/attendance-form" component={AttendanceForm} />
          <Route exact path="/people-present" component={PeoplePresent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
