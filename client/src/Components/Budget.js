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
        console.log('budget state', this.props);
        let { loading } = this.props
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <h3>WHere are my words</h3>
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state.budget
// }

export default connect(state => state, { loadBudget })(Budget);