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
                        <div className="category">
                            <label className="category-name">Mortgage/ Rent  </label>
                            <input
                                name="mortgageRent"
                                className="projected-input"
                                type='number'
                                value={budget.housing.mortgageRent.projected}
                                placeholder={budget.housing.mortgageRent.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="mortgageRent"
                                className="actual-input"
                                type="number"
                                value={budget.housing.mortgageRent.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Phone</label>
                            <input
                                name="phone"
                                className="projected-input"
                                type='number'
                                value={budget.housing.phone.projected}
                                placeholder={budget.housing.phone.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="phone"
                                className="actual-input"
                                type="number"
                                value={budget.housing.phone.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Electricity</label>
                            <input
                                name="electricity"
                                className="projected-input"
                                type='number'
                                value={budget.housing.electricity.projected}
                                placeholder={budget.housing.electricity.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="electricity"
                                className="actual-input"
                                type="number"
                                value={budget.housing.electricity.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">gas</label>
                            <input
                                name="gas"
                                className="projected-input"
                                type='number'
                                value={budget.housing.gas.projected}
                                placeholder={budget.housing.gas.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="gas"
                                className="actual-input"
                                type="number"
                                value={budget.housing.gas.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">waterSewer</label>
                            <input
                                name="waterSewer"
                                className="projected-input"
                                type='number'
                                value={budget.housing.waterSewer.projected}
                                placeholder={budget.housing.waterSewer.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="waterSewer"
                                className="actual-input"
                                type="number"
                                value={budget.housing.waterSewer.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">internet</label>
                            <input
                                name="internet"
                                className="projected-input"
                                type='number'
                                value={budget.housing.internet.projected}
                                placeholder={budget.housing.internet.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="internet"
                                className="actual-input"
                                type="number"
                                value={budget.housing.internet.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">wasteRemoval</label>
                            <input
                                name="wasteRemoval"
                                className="projected-input"
                                type='number'
                                value={budget.housing.wasteRemoval.projected}
                                placeholder={budget.housing.wasteRemoval.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="wasteRemoval"
                                className="actual-input"
                                type="number"
                                value={budget.housing.wasteRemoval.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">maintenance</label>
                            <input
                                name="maintenance"
                                className="projected-input"
                                type='number'
                                value={budget.housing.maintenance.projected}
                                placeholder={budget.housing.maintenance.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="maintenance"
                                className="actual-input"
                                type="number"
                                value={budget.housing.maintenance.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">supplies</label>
                            <input
                                name="supplies"
                                className="projected-input"
                                type='number'
                                value={budget.housing.supplies.projected}
                                placeholder={budget.housing.supplies.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="supplies"
                                className="actual-input"
                                type="number"
                                value={budget.housing.supplies.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">other</label>
                            <input
                                name="other"
                                className="projected-input"
                                type='number'
                                value={budget.housing.other.projected}
                                placeholder={budget.housing.other.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="other"
                                className="actual-input"
                                type="number"
                                value={budget.housing.other.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>hello</h5>
                        </div>
                    </div>
                </div>
                : <div>loading...</div>
        )
    }
}



export default connect(state => state, { loadBudget })(Budget);
