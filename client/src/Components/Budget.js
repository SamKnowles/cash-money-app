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
        console.log(this.props);
        return (
            <div className="budget-wrapper">
                Here's where we are
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.budget
}

export default connect(state => state, { loadBudget })(Budget)