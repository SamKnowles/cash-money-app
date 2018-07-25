import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Form from './Form';
import EntertainmentForm from './EntertainmentForm';
import LoansForm from './LoansForm';
import Transportation from './TransportationForm';

import { Switch, Route, Link, withRouter } from "react-router-dom";


class FormSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm:true,
            showEntertainment:false,
            showLoans:false,
            showTransportation:false
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
                [category]:{
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
                <Switch>
                    <Route exact path='/form' render={props => {
                        return (
                            <div>
                                <h3>Start budgeting</h3>
                                <Link to="/form/housing">Housing</Link>
                            </div>
                        )
                    }} />
                    <Route path='/form/:category' render={(props) => {
                        switch (props.match.params.category) {
                            case "loans":
                                return (
                                    <form onSubmit={this.handleSubmit}>
                                    <h3>loans</h3>
                                    <input name="vehiclePayment" value={this.state.loans.vehiclePayment} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="busTrainUber" value={this.state.loans.busTrainUber} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="insurance" value={this.state.loans.insurance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="licensing" value={this.state.loans.licensing} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="fuel" value={this.state.loans.fuel} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="maintenance" value={this.state.loans.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="other" value={this.state.loans.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <button>Submit</button>
                                        <Link to="/form/">Start Over</Link>
                                    </form>
                                )
                            case "transportation":
                                return (
                                    <form action="">
                                    <h3>trans</h3>
                                    <input name="vehiclePayment" value={this.state.transportation.vehiclePayment} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="busTrainUber" value={this.state.transportation.busTrainUber} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="insurance" value={this.state.transportation.insurance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="licensing" value={this.state.transportation.licensing} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="fuel" value={this.state.transportation.fuel} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="maintenance" value={this.state.transportation.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="other" value={this.state.transportation.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />

                                        <Link to="/form/loans">loans</Link>
                                    </form>
                                )
                            case "housing":
                                return (
                                    <form action="">
                                        <h3>Housing</h3>
                                        <input name="mortgageRent" value={this.state.housing.mortgageRent} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="phone" value={this.state.housing.phone} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="gas" value={this.state.housing.gas} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="electricity" value={this.state.housing.electricity} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="waterSewer" value={this.state.housing.waterSewer} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="internet" value={this.state.housing.internet} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="wasteRemoval" value={this.state.housing.wasteRemoval} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="maintenance" value={this.state.housing.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="supplies" value={this.state.housing.supplies} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="other" value={this.state.housing.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />

                                        <Link to="/form/transportation">trans</Link>
                                    </form>
                                )
                                case "entertainment":
                                return (
                                    <form action="">
                                        <h3>Entertainment</h3>
                                        <input name="movies" value={this.state.entertainment.movies} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="music" value={this.state.entertainment.music} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="vacation" value={this.state.entertainment.vacation} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="theater" value={this.state.entertainment.theater} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="sports" value={this.state.entertainment.sports} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="winterSports" value={this.state.entertainment.winterSports} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="other" value={this.state.entertainment.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <Link to="/form/housing">housing</Link>
                                    </form>
                                )
                        }
                    }} />
                </Switch>
            </div>
        )
    }
}

FormSequence.propTypes = {

}

export default FormSequence