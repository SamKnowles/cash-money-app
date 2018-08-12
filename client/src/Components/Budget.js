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
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }

    render() {
        console.log('budget state', this.state);
        let { loading, data } = this.props.budget
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <label htmlFor=""><input value={data.income.actual} placeholder="Enter income" /></label>
                    <h3>{data.income.actual}</h3>
                    <div className="housing-section-wrapper">
                        <input name="mortgageRent" type="number" value={formData.mortgageRent.projected} onChange={e => handleChange(e, 'housing')} />
                        <input name="phone" value={data.phone.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="gas" value={data.gas.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="electricity" value={data.electricity.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="waterSewer" value={data.waterSewer.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="internet" value={data.internet.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="wasteRemoval" value={data.wasteRemoval.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="maintenance" value={data.maintenance.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="supplies" value={data.supplies.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        <input name="other" value={data.other.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state.budget
// }

export default connect(state => state, { loadBudget })(Budget);