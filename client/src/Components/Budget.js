import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
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
        this.props.loadBudget().then(()=> this.setState({budget: this.props.budget.data}))
    }

    render() {
        console.log(this.props);
        console.log(this.props.budget);
        let { loading, data } = this.props.budget
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <label htmlFor="">Actual Income<input value={data.income.actual} placeholder="Enter income"/></label>
                    <h3>{data.income.actual}</h3>
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state.budget
// }

export default connect(state => state, { loadBudget })(Budget);