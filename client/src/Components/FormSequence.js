import React, { Component } from 'react'
import PropTypes from 'prop-types';
import HousingForm from './HousingForm';
import EntertainmentForm from './EntertainmentForm';
import LoansForm from './LoansForm';
import Transportation from './TransportationForm';

import { Switch, Route, Link, withRouter } from "react-router-dom";


class FormSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housing: {
                rent: ""
            },
            loans: {},
            transporation: {},
            entertainment: {}
        }

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    handleChange = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                [category]: {
                    ...prevState[category],
                    [name]: value
                }
            }
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <form action="">
                    <Switch>
                        <Route exact path='/form' render={props => {
                            return (
                                <div>
                                    <h3>Start budgeting</h3>
                                    <Link to="/form/housing">Housing</Link>
                                </div>
                            )
                        }} />
                        <Route path='/form/housing' render={props => <HousingForm handleChange={this.handleChange}formData={this.state.housing} />} />} />
                        <Route path='/form/loans' render={props => <HousingForm formData={this.state.housing} />} />} />
                        <Route path='/form/transportation' render={props => <HousingForm formData={this.state.housing} />} />} />
                        <Route path='/form/entertainment' render={props => <HousingForm formData={this.state.housing} />} />} />
                </Switch>
                </form>
            </div>
        )
    }
}

FormSequence.propTypes = {

}

export default FormSequence