import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import {  Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class LoansForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Loans</h1>
                <input name="vehiclePayment" value={formData.vehiclePayment.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="busTrainUber" value={formData.busTrainUber.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="insurance" value={formData.insurance.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="licensing" value={formData.licensing.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="fuel" value={formData.fuel.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="maintenance" value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <Link to="/form/entertainment">entertainment</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(LoansForm));