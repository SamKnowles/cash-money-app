import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadBudget} from '../Redux/budget'

class BudgetLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {housing} =this.props;
        return (
            <div className='budget-wrapper'>
                <h3>{housing}</h3>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>
        )
    }
}

export default connect (state => state, {loadBudget}) (BudgetLayout);