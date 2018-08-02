import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import FormSequence from "./FormSequence";
import BudgetLayout from './BudgetLayout';
import '../Styles/budget.css';

class Budget extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.props.loadBudget();        
    }

    render() {
            let { budgets } = this.props.response.data;
            let budgeTall = budgets.map((budget, i) => {
                return <BudgetLayout key={i} {...budget}></BudgetLayout>
            })
        return (
            <div className="budget-wrapper">
                {budgeTall}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.budget
}

export default connect(state => state, { loadBudget })(Budget)