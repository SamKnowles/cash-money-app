import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import '../Styles/budget.css';

// import { Switch, Route, Link, withRouter } from "react-router-dom";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: null
        }
    }

    handleChangeActual = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                budget: {
                    ...prevState.budget,
                    [category]: {
                        ...prevState.budget[category],
                        [name]: { ...prevState.budget[category][name], actual: value }
                    }
                }
            }
        })
    }

    handleChangeProjected = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                budget: {
                    ...prevState.budget,
                    [category]: {
                        ...prevState.budget[category],
                        [name]: { ...prevState.budget[category][name], projected: value }
                    }
                }
            }
        })
    }

    handleSubmit = (e) => {
        this.props.submitBudget(this.state);
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }


    render() {
        let { loading } = this.props.budget;
        // console.log(this.props.budget)
        console.log(this.state);
        const { budget } = this.state;
        console.log(budget);
        return (
            budget ?
                <div className="budget-wrapper">
                    {/* <div>
                        <label htmlFor="">Actual Income<input value={budget.income.actual} placeholder="Enter income" /></label>
                    </div> */}
                    <div className="housing-wrapper">
                        <div className="housing-category-wrapper">
                            <label htmlFor="">Mortgage
                        <input
                                    name="mortgageRent"
                                    type='number'
                                    value={budget.housing.mortgageRent.projected}
                                    placeholder={budget.housing.mortgageRent.projected}
                                    onChange={e => this.handleChangeProjected(e, "housing")} />
                                <input
                                    name="mortgageRent"
                                    type="number"
                                    value={budget.housing.mortgageRent.actual}
                                    onChange={e => this.handleChangeActual(e, 'housing')} />
                            </label>
                        </div>
                        <div className="housing-category-wrapper">
                            <label htmlFor="">Phone
                        <input
                                    name="phone"
                                    type='number'
                                    value={budget.housing.phone.projected}
                                    placeholder={budget.housing.phone.projected}
                                    onChange={e => this.handleChangeProjected(e, "housing")} />
                                <input
                                    name="phone"
                                    type="number"
                                    value={budget.housing.phone.actual}
                                    onChange={e => this.handleChangeActual(e, 'housing')} />
                            </label>
                            <div className="housing-category-wrapper">
                                <label htmlFor="">Electricity
                        <input
                                        name="electricity"
                                        type='number'
                                        value={budget.housing.electricity.projected}
                                        placeholder={budget.housing.electricity.projected}
                                        onChange={e => this.handleChangeProjected(e, "housing")} />
                                    <input
                                        name="electricity"
                                        type="number"
                                        value={budget.housing.electricity.actual}
                                        onChange={e => this.handleChangeActual(e, 'housing')} />
                                </label>
                            </div>
                            <div className="housing-category-wrapper">
                                <label htmlFor="">gas
                        <input
                                        name="gas"
                                        type='number'
                                        value={budget.housing.gas.projected}
                                        placeholder={budget.housing.gas.projected}
                                        onChange={e => this.handleChangeProjected(e, "housing")} />
                                    <input
                                        name="gas"
                                        type="number"
                                        value={budget.housing.gas.actual}
                                        onChange={e => this.handleChangeActual(e, 'housing')} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                : <div>loading...</div>
        )
    }
}



export default connect(state => state, { loadBudget })(Budget);
