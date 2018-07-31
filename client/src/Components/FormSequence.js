import React, { Component } from 'react'
import PropTypes from 'prop-types';
import HousingForm from './HousingForm';
import EntertainmentForm from './EntertainmentForm';
import LoansForm from './LoansForm';
import TransportationForm from './TransportationForm';
import { addCategory } from '../Redux/budget';
import { connect } from "react-redux";

import { Switch, Route, Link, withRouter } from "react-router-dom";


class FormSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housing: {
                mortgageRent: {
                    projected: '',
                },
                phone: {
                    projected: '',
                },
                gas: {
                    projected: '',
                },
                electricity: {
                    projected: '',
                },
                waterSewer: {
                    projected: '',
                },
                internet: {
                    projected: '',
                },
                wasteRemoval: {
                    projected: '',
                },
                maintenance: {
                    projected: '',
                },
                supplies: {
                    projected: '',
                },
                other: {
                    projected: ''
                }
            },
            loans: {
                vehiclePayment: {
                    projected: '',
                },
                busTrainUber: {
                    projected: '',
                },
                insurance: {
                    projected: '',
                },
                licensing: {
                    projected: '',
                },
                fuel: {
                    projected: '',
                },
                maintenance: {
                    projected: '',
                },
                other: {
                    projected: ''
                }
            },
            transportation: {
                vehiclePayment: {
                    projected: '',
                },
                busTrainUber: {
                    projected: '',
                },
                insurance: {
                    projected: '',
                },
                licensing: {
                    projected: '',
                },
                fuel: {
                    projected: '',
                },
                maintenance: {
                    projected: '',
                },
                other: {
                    projected: '',
                }
            },
            entertainment: {
                movies: {
                    projected: '',
                },
                music: {
                    projected: '',
                },
                vacation: {
                    projected: '',
                },
                theater: {
                    projected: '',
                },
                sports: {
                    projected: '',
                },
                winterSports: {
                    projected: '',
                },
                other: {
                    projected: '',
                }
            },
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
                    [name]: { projected: value }
                }
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { addCategory } = this.props;
        addCategory(this.state);
        // alert(JSON.stringify(this.state));
    }

    render() {
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
                        <Route path='/form/housing' render={props => <HousingForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.housing} />} />} />
                        <Route path='/form/transportation' render={props => <TransportationForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.transportation} />} />} />
                        <Route path='/form/loans' render={props => <LoansForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.loans} />} />} />
                        <Route path='/form/entertainment' render={props => <EntertainmentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.entertainment} />} />} />
                </Switch>
                </form>
            </div>
        )
    }
}

FormSequence.propTypes = {

}

export default withRouter(connect(state => state, { addCategory })(FormSequence));
