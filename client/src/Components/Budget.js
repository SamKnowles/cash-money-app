import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import FormSequence from "./FormSequence";
import '../Styles/budget.css';

class Budget extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.props.loadBudget();
    }

    render() {
        let {data} = this.props
        console.log(data);
        return (
            <div className="budget-wrapper">
                THIS IS THE BUDGET
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.budget
}

export default connect(state => state, { loadBudget })(Budget)