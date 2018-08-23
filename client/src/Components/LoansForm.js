import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";
import '../Styles/loansform.css';

import { Link, withRouter } from "react-router-dom";


class LoansForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Loans</h1>
                </div>
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Student</label>
                        <input name="student" className='cat-input-wrapper' value={formData.student.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Credit Card</label>
                        <input name="credit" className='cat-input-wrapper' value={formData.credit.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Personal</label>
                        <input name="personal" className='cat-input-wrapper' value={formData.personal.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <input name="other" className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' to="/form/entertainment">Entertainment</Link>
                </div>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(LoansForm));