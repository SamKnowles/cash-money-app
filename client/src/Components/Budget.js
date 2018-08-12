import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import FormSequence from './FormSequence';
import '../Styles/budget.css';

import { Switch, Route, Link, withRouter } from "react-router-dom";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: null
        }
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }

    render() {
        console.log('budget state', this.state);
        let { loading, data } = this.props.budget
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <form action="">
                    <div>
                        <label htmlFor="This Thingy">This Thingy<input value={data.income.actual} placeholder="Enter income" /><input value={data.income.projected} placeholder="Enter income" /></label>
                        <h3>{data.income.actual}</h3>
                    </div>
                    <div>
                        <label htmlFor="Entertainment">Entertain Us<input value={data.movies.projected} placeholder="Enter income" /><input value={data.movies.projected} placeholder="Enter income" /></label>
                        <h3>{data.income.actual}</h3>
                    </div>
                    </form>
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state.budget
// }       


export default connect(state => state, { loadBudget })(Budget);