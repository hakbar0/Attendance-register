import React, { Component } from 'react';
import '../App.css';
import db from '../firebase';


class PeoplePresent extends Component {

    state = {
        currentPeoplePresent: ""
    }

    getPeoplePresentToday = () => {
        db.ref("/Users").on("value", res => {
            this.setState({ currentPeoplePresent: res.val() });
        })
    };

    componentDidMount = () => {
        this.getPeoplePresentToday();
    }

    render() {
        return (
            <div className="people-present">
                {this.state.currentPeoplePresent ?
                    <table>
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            {
                                Object.entries(this.state.currentPeoplePresent).reverse().map((person) => {
                                    console.log(person[0]);
                                    return (
                                        <tr className="currentPeoplePresent" key={person[0]}>
                                            <td>{person[1].firstname}</td>
                                            <td>{person[1].surname}</td>
                                            <td>{person[1].date}</td>
                                            <td>{person[1].time}</td>
                                        </tr>
                                    );
                                })
                               
                            }
                        </tbody>
                    </table>
                    :
                    <h1>loading</h1>
                }
            </div>
        );
    }
}

export default PeoplePresent;