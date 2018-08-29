import React, { Component } from 'react';
import { loadBudget, editBudget, submitBudget } from "../Redux/budget";
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
                        [name]: { ...prevState.budget[category][name], actual: Number(value)}
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
                        [name]: { ...prevState.budget[category][name], projected: Number(value) }
                    }
                }
            }
        })
    }
    
    handleChangeIncomeProjected = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                [category]: {
                    ...prevState[category],
                    [name]: { ...prevState.budget[name], projected: Number(value) }
                }
            }
        })
    }

    handleChangeIncomeActual = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                [category]: {
                    ...prevState[category],
                    [name]: { ...prevState.budget[name], actual: Number(value) }
                }
            }
        })
    }

    handleSubmit = (e) => {
        this.props.editBudget(this.state.budget, this.props.budget.data._id);
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }


    render() {
        let { loading } = this.props.budget;
        console.log(this.state);
        const { budget } = this.state;
        return (
            budget ?
                <div className="budget-wrapper">
                    <div className='budget-title-wrapper'>PULL YOUR LIFE TOGETHER</div>
                    <div className='income-wrapper'>
                        <div className='pro-act-income-wrapper'>
                            <div className='projected-income-wrapper'>
                                <h2>Projected Monthly Income</h2>
                                <div className='inc-wrapper-wrapper'>
                                    <div className="income-cat-wrapper">
                                        <h6>Income 1</h6>
                                        <input
                                    name="income"
                                    className="dif-wrapper"
                                    type='number'
                                    value={budget.income.projected}
                                    placeholder={budget.income.projected}
                                    onChange={e => this.handleChangeIncomeProjected(e, 'budget')} />
                                    </div>
                                    <div className="income-cat-wrapper">
                                        <h6>Extra Income</h6>
                                        <div className='dif-wrapper'>$0</div>
                                    </div>
                                    <div className="income-cat-wrapper">
                                        <h6>Total monthly income</h6>
                                        <div className='dif-wrapper'>$0</div>
                                    </div>
                                </div>
                            </div>
                            <div className='actual-income-wrapper'>
                                <h2>Actual Monthly Income</h2>
                                <div className='inc-wrapper-wrapper'>
                                    <div className="income-cat-wrapper">
                                        <h6>Income 1</h6>
                                        <input
                                    name="income"
                                    className="dif-wrapper"
                                    type='number'
                                    value={budget.income.actual}
                                    placeholder={budget.income.actual}
                                    onChange={e => this.handleChangeIncomeActual(e, 'budget')} />
                                    </div>
                                    <div className="income-cat-wrapper">
                                        <h6>Extra Income</h6>
                                        <div className='dif-wrapper'>$0</div>
                                    </div>
                                    <div className="income-cat-wrapper">
                                        <h6>Total monthly income</h6>
                                        <div className='dif-wrapper'>$0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='balance-section-wrapper'>
                            <div className='bal-row-wrapper'>
                                <div className='bal-discription-wrapper'>Projected Balance (Projected Income Minus Expenses)</div>
                                <div className='bal-wrapper'>$0</div>
                            </div>
                            <div className='bal-row-wrapper'>
                                <div className='bal-discription-wrapper'>Actual Balance (Actual Income Minus Expenses)</div>
                                <div className='bal-wrapper'>$0</div>
                            </div>
                            <div className='bal-row-wrapper'>
                                <div className='bal-discription-wrapper'>Difference (Actual Difference Minus Projected)</div>
                                <div className='bal-wrapper'>$0</div>
                            </div>
                        </div>
                    </div>
                    <div className='category-wrapper'>
                        <div className="housing-wrapper">
                            <div className="category">
                                <p>Housing</p>
                                <h4>Projected Cost</h4>
                                <h4>Actual Cost</h4>
                                <h4>Difference</h4>
                            </div>
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
                                <h5 style={budget.housing.mortgageRent.projected - budget.housing.mortgageRent.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.mortgageRent.projected - budget.housing.mortgageRent.actual}</h5>
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
                                <h5 style={budget.housing.phone.projected - budget.housing.phone.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.phone.projected - budget.housing.phone.actual}</h5>

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
                                <h5 style={budget.housing.electricity.projected - budget.housing.electricity.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.electricity.projected - budget.housing.electricity.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Gas</label>
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
                                <h5 style={budget.housing.gas.projected - budget.housing.gas.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.gas.projected - budget.housing.gas.actual}</h5>
                            </div>
                            <div className="category">
                                <label className="category-name">Water/ Sewer</label>
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
                                <h5 style={budget.housing.waterSewer.projected - budget.housing.waterSewer.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.waterSewer.projected - budget.housing.waterSewer.actual}</h5>
                            </div>
                            <div className="category">
                                <label className="category-name">Internet</label>
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
                                <h5 style={budget.housing.internet.projected - budget.housing.internet.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.internet.projected - budget.housing.internet.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Waste Removal</label>
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
                                <h5 style={budget.housing.wasteRemoval.projected - budget.housing.wasteRemoval.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.wasteRemoval.projected - budget.housing.wasteRemoval.actual}</h5>
                            </div>
                            <div className="category">
                                <label className="category-name">Maintenance</label>
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
                                <h5 style={budget.housing.maintenance.projected - budget.housing.maintenance.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.maintenance.projected - budget.housing.maintenance.actual}</h5>
                            </div>
                            <div className="category">
                                <label className="category-name">Supplies</label>
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
                                <h5 style={budget.housing.supplies.projected - budget.housing.supplies.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.supplies.projected - budget.housing.supplies.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Other</label>
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
                                <h5 style={budget.housing.other.projected - budget.housing.other.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.other.projected - budget.housing.other.actual}</h5>
                            </div>
                            <div className="category">
                                <p>Subtotals</p>
                                <h4>{budget.housing.mortgageRent.projected + budget.housing.phone.projected + budget.housing.electricity.projected + budget.housing.gas.projected + budget.housing.waterSewer.projected + budget.housing.internet.projected + budget.housing.wasteRemoval.projected + budget.housing.maintenance.projected + budget.housing.supplies.projected + budget.housing.other.projected }</h4>
                                <h4>{budget.housing.mortgageRent.actual + budget.housing.phone.actual + budget.housing.electricity.actual + budget.housing.gas.actual + budget.housing.waterSewer.actual + budget.housing.internet.actual + budget.housing.wasteRemoval.actual + budget.housing.maintenance.actual + budget.housing.supplies.actual + budget.housing.other.actual }</h4>
                                <h4 style={budget.housing.mortgageRent.projected + budget.housing.phone.projected + budget.housing.electricity.projected + budget.housing.gas.projected + budget.housing.waterSewer.projected + budget.housing.internet.projected + budget.housing.wasteRemoval.projected + budget.housing.maintenance.projected + budget.housing.supplies.projected + budget.housing.other.projected - (budget.housing.mortgageRent.actual + budget.housing.phone.actual + budget.housing.electricity.actual + budget.housing.gas.actual + budget.housing.waterSewer.actual + budget.housing.internet.actual + budget.housing.wasteRemoval.actual + budget.housing.maintenance.actual + budget.housing.supplies.actual + budget.housing.other.actual) > 0 ? {color: "green"}  : {color: "red"} }>{budget.housing.mortgageRent.projected + budget.housing.phone.projected + budget.housing.electricity.projected + budget.housing.gas.projected + budget.housing.waterSewer.projected + budget.housing.internet.projected + budget.housing.wasteRemoval.projected + budget.housing.maintenance.projected + budget.housing.supplies.projected + budget.housing.other.projected - (budget.housing.mortgageRent.actual + budget.housing.phone.actual + budget.housing.electricity.actual + budget.housing.gas.actual + budget.housing.waterSewer.actual + budget.housing.internet.actual + budget.housing.wasteRemoval.actual + budget.housing.maintenance.actual + budget.housing.supplies.actual + budget.housing.other.actual)}</h4>
                                </div>
                        </div>

                        <div className="entertainment-wrapper">
                            <div className="category">
                                <p>Entertainment</p>
                                <h4>Projected Cost</h4>
                                <h4>Actual Cost</h4>
                                <h4>Difference</h4>
                            </div>
                            <div className="category">
                                <label className="category-name">Movies  </label>
                                <input
                                    name="movies"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.movies.projected}
                                    placeholder={budget.entertainment.movies.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="movies"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.movies.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.movies.projected - budget.entertainment.movies.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.movies.projected - budget.entertainment.movies.actual}</h5>
                            </div>
                            <div className="category">
                                <label className="category-name">Music</label>
                                <input
                                    name="music"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.music.projected}
                                    placeholder={budget.entertainment.music.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="music"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.music.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.music.projected - budget.entertainment.music.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.music.projected - budget.entertainment.music.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Vacation</label>
                                <input
                                    name="vacation"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.vacation.projected}
                                    placeholder={budget.entertainment.vacation.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="vacation"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.vacation.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.vacation.projected - budget.entertainment.vacation.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.vacation.projected - budget.entertainment.vacation.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Theater</label>
                                <input
                                    name="theater"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.theater.projected}
                                    placeholder={budget.entertainment.theater.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="theater"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.theater.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.theater.projected - budget.entertainment.theater.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.theater.projected - budget.entertainment.theater.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Sports</label>
                                <input
                                    name="sports"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.sports.projected}
                                    placeholder={budget.entertainment.sports.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="sports"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.sports.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.sports.projected - budget.entertainment.sports.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.sports.projected - budget.entertainment.sports.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Winter Sports</label>
                                <input
                                    name="winterSports"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.winterSports.projected}
                                    placeholder={budget.entertainment.winterSports.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="winterSports"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.winterSports.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.winterSports.projected - budget.entertainment.winterSports.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.winterSports.projected - budget.entertainment.winterSports.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Other</label>
                                <input
                                    name="other"
                                    className="projected-input"
                                    type='number'
                                    value={budget.entertainment.other.projected}
                                    placeholder={budget.entertainment.other.projected}
                                    onChange={e => this.handleChangeProjected(e, "entertainment")} />
                                <input
                                    name="other"
                                    className="actual-input"
                                    type="number"
                                    value={budget.entertainment.other.actual}
                                    onChange={e => this.handleChangeActual(e, 'entertainment')} />
                                <h5 style={budget.entertainment.other.projected - budget.entertainment.other.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.other.projected - budget.entertainment.other.actual}</h5>

                            </div>
                            <div className="category">
                                <p>Subtotals</p>
                                <h4>{budget.entertainment.movies.projected + budget.entertainment.music.projected + budget.entertainment.vacation.projected + budget.entertainment.theater.projected + budget.entertainment.sports.projected + budget.entertainment.winterSports.projected + budget.entertainment.other.projected }</h4>
                                <h4>{budget.entertainment.movies.actual + budget.entertainment.music.actual + budget.entertainment.vacation.actual + budget.entertainment.theater.actual + budget.entertainment.sports.actual + budget.entertainment.winterSports.actual + budget.entertainment.other.actual }</h4>
                                <h4 style={budget.entertainment.movies.projected + budget.entertainment.music.projected + budget.entertainment.vacation.projected + budget.entertainment.theater.projected + budget.entertainment.sports.projected + budget.entertainment.winterSports.projected + budget.entertainment.other.projected - (budget.entertainment.movies.actual + budget.entertainment.music.actual + budget.entertainment.vacation.actual + budget.entertainment.theater.actual + budget.entertainment.sports.actual + budget.entertainment.winterSports.actual + budget.entertainment.other.actual) > 0 ? {color: "green"}  : {color: "red"} }>{budget.entertainment.movies.projected + budget.entertainment.music.projected + budget.entertainment.vacation.projected + budget.entertainment.theater.projected + budget.entertainment.sports.projected + budget.entertainment.winterSports.projected + budget.entertainment.other.projected - (budget.entertainment.movies.actual + budget.entertainment.music.actual + budget.entertainment.vacation.actual + budget.entertainment.theater.actual + budget.entertainment.sports.actual + budget.entertainment.winterSports.actual + budget.entertainment.other.actual)}</h4>
                                </div>
                        </div>

                        <div className="loans-wrapper">
                            <div className="category">
                                <p>Loans</p>
                                <h4>Projected Cost</h4>
                                <h4>Actual Cost</h4>
                                <h4>Difference</h4>
                            </div>
                            <div className="category">
                                <label className="category-name">Personal</label>
                                <input
                                    name="personal"
                                    className="projected-input"
                                    type='number'
                                    value={budget.loans.personal.projected}
                                    placeholder={budget.loans.personal.projected}
                                    onChange={e => this.handleChangeProjected(e, "loans")} />
                                <input
                                    name="personal"
                                    className="actual-input"
                                    type="number"
                                    value={budget.loans.personal.actual}
                                    onChange={e => this.handleChangeActual(e, 'loans')} />
                                <h5 style={budget.loans.personal.projected - budget.loans.personal.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.loans.personal.projected - budget.loans.personal.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Student</label>
                                <input
                                    name="student"
                                    className="projected-input"
                                    type='number'
                                    value={budget.loans.student.projected}
                                    placeholder={budget.loans.student.projected}
                                    onChange={e => this.handleChangeProjected(e, "loans")} />
                                <input
                                    name="student"
                                    className="actual-input"
                                    type="number"
                                    value={budget.loans.student.actual}
                                    onChange={e => this.handleChangeActual(e, 'loans')} />
                                <h5 style={budget.loans.student.projected - budget.loans.student.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.loans.student.projected - budget.loans.student.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Credit</label>
                                <input
                                    name="credit"
                                    className="projected-input"
                                    type='number'
                                    value={budget.loans.credit.projected}
                                    placeholder={budget.loans.credit.projected}
                                    onChange={e => this.handleChangeProjected(e, "loans")} />
                                <input
                                    name="credit"
                                    className="actual-input"
                                    type="number"
                                    value={budget.loans.credit.actual}
                                    onChange={e => this.handleChangeActual(e, 'loans')} />
                                <h5 style={budget.loans.credit.projected - budget.loans.credit.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.loans.credit.projected - budget.loans.credit.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Other</label>
                                <input
                                    name="other"
                                    className="projected-input"
                                    type='number'
                                    value={budget.loans.other.projected}
                                    placeholder={budget.loans.other.projected}
                                    onChange={e => this.handleChangeProjected(e, "loans")} />
                                <input
                                    name="other"
                                    className="actual-input"
                                    type="number"
                                    value={budget.loans.other.actual}
                                    onChange={e => this.handleChangeActual(e, 'loans')} />
                                <h5 style={budget.loans.other.projected - budget.loans.other.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.loans.other.projected - budget.loans.other.actual}</h5>

                            </div>
                            <div className="category">
                                <p>Subtotals</p>
                                <h4>{budget.loans.personal.projected + budget.loans.student.projected + budget.loans.credit.projected + budget.loans.other.projected }</h4>
                                <h4>{budget.loans.personal.actual + budget.loans.student.actual + budget.loans.credit.actual + budget.loans.other.actual }</h4>
                                <h4 style={budget.loans.personal.projected + budget.loans.student.projected + budget.loans.credit.projected + budget.loans.other.projected - (budget.loans.personal.actual + budget.loans.student.actual + budget.loans.credit.actual + budget.loans.other.actual) > 0 ? {color: "green"}  : {color: "red"} }>{budget.loans.personal.projected + budget.loans.student.projected + budget.loans.credit.projected + budget.loans.other.projected - (budget.loans.personal.actual + budget.loans.student.actual + budget.loans.credit.actual + budget.loans.other.actual)}</h4>
                            </div>
                        </div>

                        <div className="transportation-wrapper">
                            <div className="category">
                                <p>Transportation</p>
                                <h4>Projected Cost</h4>
                                <h4>Actual Cost</h4>
                                <h4>Difference</h4>
                            </div>
                            <div className="category">
                                <label className="category-name">Car Payment</label>
                                <input
                                    name="vehiclePayment"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.vehiclePayment.projected}
                                    placeholder={budget.transportation.vehiclePayment.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="vehiclePayment"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.vehiclePayment.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.vehiclePayment.projected - budget.transportation.vehiclePayment.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.vehiclePayment.projected - budget.transportation.vehiclePayment.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Train/ Uber</label>
                                <input
                                    name="busTrainUber"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.busTrainUber.projected}
                                    placeholder={budget.transportation.busTrainUber.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="busTrainUber"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.busTrainUber.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.busTrainUber.projected - budget.transportation.busTrainUber.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.busTrainUber.projected - budget.transportation.busTrainUber.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Insurance</label>
                                <input
                                    name="insurance"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.insurance.projected}
                                    placeholder={budget.transportation.insurance.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="insurance"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.insurance.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.insurance.projected - budget.transportation.insurance.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.insurance.projected - budget.transportation.insurance.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Licensing</label>
                                <input
                                    name="licensing"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.licensing.projected}
                                    placeholder={budget.transportation.licensing.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="licensing"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.licensing.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.licensing.projected - budget.transportation.licensing.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.licensing.projected - budget.transportation.licensing.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Fuel</label>
                                <input
                                    name="fuel"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.fuel.projected}
                                    placeholder={budget.transportation.fuel.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="fuel"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.fuel.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.fuel.projected - budget.transportation.fuel.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.fuel.projected - budget.transportation.fuel.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Maintenance</label>
                                <input
                                    name="maintenance"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.maintenance.projected}
                                    placeholder={budget.transportation.maintenance.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="maintenance"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.maintenance.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.maintenance.projected - budget.transportation.maintenance.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.maintenance.projected - budget.transportation.maintenance.actual}</h5>

                            </div>
                            <div className="category">
                                <label className="category-name">Other</label>
                                <input
                                    name="other"
                                    className="projected-input"
                                    type='number'
                                    value={budget.transportation.other.projected}
                                    placeholder={budget.transportation.other.projected}
                                    onChange={e => this.handleChangeProjected(e, "transportation")} />
                                <input
                                    name="other"
                                    className="actual-input"
                                    type="number"
                                    value={budget.transportation.other.actual}
                                    onChange={e => this.handleChangeActual(e, 'transportation')} />
                                <h5 style={budget.transportation.other.projected - budget.transportation.other.actual > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.other.projected - budget.transportation.other.actual}</h5>

                            </div>
                            <div className="category">
                                <p>Subtotals</p>
                                <h4>{budget.transportation.vehiclePayment.projected + budget.transportation.busTrainUber.projected + budget.transportation.insurance.projected + budget.transportation.licensing.projected + budget.transportation.fuel.projected + budget.transportation.maintenance.projected + budget.transportation.other.projected }</h4>
                                <h4>{budget.transportation.vehiclePayment.actual + budget.transportation.busTrainUber.actual + budget.transportation.insurance.actual + budget.transportation.licensing.actual + budget.transportation.fuel.actual + budget.transportation.maintenance.actual + budget.transportation.other.actual }</h4>
                                <h4 style={budget.transportation.vehiclePayment.projected + budget.transportation.busTrainUber.projected + budget.transportation.insurance.projected + budget.transportation.licensing.projected + budget.transportation.fuel.projected + budget.transportation.maintenance.projected + budget.transportation.other.projected - (budget.transportation.vehiclePayment.actual + budget.transportation.busTrainUber.actual + budget.transportation.insurance.actual + budget.transportation.licensing.actual + budget.transportation.fuel.actual + budget.transportation.maintenance.actual + budget.transportation.other.actual) > 0 ? {color: "green"}  : {color: "red"} }>{budget.transportation.vehiclePayment.projected + budget.transportation.busTrainUber.projected + budget.transportation.insurance.projected + budget.transportation.licensing.projected + budget.transportation.fuel.projected + budget.transportation.maintenance.projected + budget.transportation.other.projected - (budget.transportation.vehiclePayment.actual + budget.transportation.busTrainUber.actual + budget.transportation.insurance.actual + budget.transportation.licensing.actual + budget.transportation.fuel.actual + budget.transportation.maintenance.actual + budget.transportation.other.actual)}</h4>
                                </div>
                        </div>
                    </div>
                    <div className='button-wrapper'>
                        <button className='button' onClick={this.handleSubmit}>UPDATE</button>
                    </div>
                </div>
                : <div>loading...</div>
        )
    }
}



export default connect(state => state, { loadBudget, editBudget, submitBudget })(Budget);
