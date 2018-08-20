import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import {  Link, withRouter } from "react-router-dom";


class LoansForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Loans</h1>
                <input name="student" value={formData.student.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="credit" value={formData.credit.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="personal" value={formData.personal.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "loans")} />
                <Link to="/form/entertainment">entertainment</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(LoansForm));