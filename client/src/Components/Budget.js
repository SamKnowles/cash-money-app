import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import '../Styles/budget.css';

import { Switch, Route, Link, withRouter } from "react-router-dom";

class Budget extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.props.loadBudget();
    }

    render() {
        console.log('budget state', this.props.budget);
        return (
            <div className="budget-wrapper">
                <p>{}</p>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state.budget
// }

export default connect(state => state, { loadBudget })(Budget);