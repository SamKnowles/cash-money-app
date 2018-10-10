import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";
import '../Styles/categoryForm.css';

import { Link, withRouter } from "react-router-dom";


class LoansForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Loans</h1>
                </div>
                {/* <div class="progress-light-grey">
                    <div class="progress-grey" style={{ "height": "24px", "width": "60%" }}>60%</div>
                </div> */}
                <div className='cat-form-instructions' style={{marginTop: 120, width:229}}>Fill out this form then click the "Entertainment" button at the bottom.</div>
                <div className='mid-section-wrapper' style={{marginBottom:59}}>
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Student</label>
                        <span className='form-dollar-sign'>$</span><input name="student" placeholder="0.00" className='cat-input-wrapper' value={formData.student.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Credit Card</label>
                        <span className='form-dollar-sign'>$</span><input name="credit" placeholder="0.00" className='cat-input-wrapper' value={formData.credit.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Personal</label>
                        <span className='form-dollar-sign'>$</span><input name="personal" placeholder="0.00" className='cat-input-wrapper' value={formData.personal.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <span className='form-dollar-sign'>$</span><input name="other" placeholder="0.00" className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, "loans")} />
                    </div>
                </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' style={{height:'93%'}} to="/form/entertainment">Entertainment</Link>
                </div>
                <footer className='cat-form-footer'></footer> 
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(LoansForm));