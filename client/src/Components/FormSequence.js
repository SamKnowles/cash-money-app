import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import HousingForm from './HousingForm';
import EntertainmentForm from './EntertainmentForm';
import LoansForm from './LoansForm';
import TransportationForm from './TransportationForm';
import Budget from './Budget';
import { submitBudget } from '../Redux/budget';
import { connect } from "react-redux";

import { Switch, Route, Link, withRouter } from "react-router-dom";


class FormSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            income: {
                projected: 0
            },
            housing: {
                mortgageRent: {
                    projected: 0,
                },
                phone: {
                    projected: 0,
                },
                gas: {
                    projected: 0,
                },
                electricity: {
                    projected: 0,
                },
                waterSewer: {
                    projected: 0,
                },
                internet: {
                    projected: 0,
                },
                wasteRemoval: {
                    projected: 0,
                },
                maintenance: {
                    projected: 0,
                },
                supplies: {
                    projected: 0,
                },
                other: {
                    projected: 0
                }
            },
            loans: {
                personal: {
                    projected: 0,
                },
                student: {
                    projected: 0,
                },
                credit: {
                    projected: 0,
                },
                other: {
                    projected: 0,
                }
            },
            transportation: {
                vehiclePayment: {
                    projected: 0,
                },
                busTrainUber: {
                    projected: 0,
                },
                insurance: {
                    projected: 0,
                },
                licensing: {
                    projected: 0,
                },
                fuel: {
                    projected: 0,
                },
                maintenance: {
                    projected: 0,
                },
                other: {
                    projected: 0,
                }
            },
            entertainment: {
                movies: {
                    projected: 0,
                },
                music: {
                    projected: 0,
                },
                vacation: {
                    projected: 0,
                },
                theater: {
                    projected: 0,
                },
                sports: {
                    projected: 0,
                },
                winterSports: {
                    projected: 0,
                },
                other: {
                    projected: 0,
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

    handleSubmit = (e) => {
        console.log(this.state.income);
        this.props.submitBudget(this.state);
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
                        <Route path='/form/housing' render={props => <HousingForm handleChange={this.handleChange} formData={this.state.housing} />} />} />
                        <Route path='/form/transportation' render={props => <TransportationForm handleChange={this.handleChange} formData={this.state.transportation} />} />} />
                        <Route path='/form/loans' render={props => <LoansForm handleChange={this.handleChange} formData={this.state.loans} />} />} />
                        <Route path='/form/entertainment' render={props => <EntertainmentForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formData={this.state.entertainment} />} />} />
                        <Route path='/budget' render={props => <Budget />} />
                    </Switch>
                </form>
            </div>
        )
    }
}

FormSequence.propTypes = {

}

export default withRouter(connect(state => state, { submitBudget })(FormSequence));