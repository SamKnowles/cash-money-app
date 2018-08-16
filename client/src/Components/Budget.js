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
                [category]: {
                    ...prevState[category],
                    [name]: { actual: value }
                }
            }
        })
    }

    handleChangeProjected = (e, category) => {
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
        this.props.submitBudget(this.state);
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }

    // handleChangeMain = (e, category) => {
    //     const { value, name } = e.target;
    //     this.setState(prevState => {
    //         return {
    //             [category]: {
    //                 ...prevState[category],
    //                 [name]: { actual: value }
    //             }
    //         }
    //     })
    // }

    render() {
        let { loading, data } = this.props.budget;
        console.log(this.props.budget)
        const { budget } = this.state;
        // console.log(this.props.budget);
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <div>
                        <label htmlFor="">Actual Income<input value={data.income.actual} placeholder="Enter income" /></label>
                        {/* <h3>{budget.income.actual}</h3> */}
                    </div>
                    {/* <label htmlFor="">Mortgage<input name="mortgageRent" type='number' value={budget.housing.mortgageRent.actual} placeholder={budget.housing.mortgageRent.actual} onChange={e => this.handleChangeProjected(e, "housing")} /><input name="mortgageRentActual" type="number" value={budget.housing.mortgageRent.actual} onChange={e => this.props.handleChangeActual(e, 'housing')} />
                    </label> */}
                    {/* <h3>{budget.housing.mortgageRent.actual}</h3> */}
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return Budget
// }

export default connect(state => state, { loadBudget })(Budget);
