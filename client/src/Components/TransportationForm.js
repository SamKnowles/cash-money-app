import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { Link, withRouter } from "react-router-dom";


class TransportationForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Transportation</h1>
                </div>
                {/* <div class="progress-light-grey">
                    <div class="progress-grey" style={{ "height": "24px", "width": "40%" }}>40%</div>
                </div> */}
                <div className='cat-form-instructions' style={{marginTop:93, width:300}}>Fill out this form then click the "Loans" button at the bottom.</div>
                <div className='mid-section-wrapper'>
                    <div className='cat-form-wrapper'>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Vehicle Payment</label>
                            <span className='form-dollar-sign'>$</span><input name="vehiclePayment" placeholder='0.00' className='cat-input-wrapper' type="number" value={formData.vehiclePayment.projected} onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Train/ Uber</label>
                            <span className='form-dollar-sign'>$</span><input name="busTrainUber" placeholder='0.00' className='cat-input-wrapper' value={formData.busTrainUber.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Insurance</label>
                            <span className='form-dollar-sign'>$</span><input name="insurance" placeholder='0.00' className='cat-input-wrapper' value={formData.insurance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Licensing</label>
                            <span className='form-dollar-sign'>$</span><input name="licensing" placeholder='0.00' className='cat-input-wrapper' value={formData.licensing.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Fuel</label>
                            <span className='form-dollar-sign'>$</span><input name="fuel" placeholder='0.00' className='cat-input-wrapper' value={formData.fuel.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Maintenance</label>
                            <span className='form-dollar-sign'>$</span><input name="maintenance" placeholder='0.00' className='cat-input-wrapper' value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Other</label>
                            <span className='form-dollar-sign'>$</span><input name="other" placeholder='0.00' className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                        </div>
                    </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' to="/form/loans">Loans</Link>
                </div>
                <footer className='cat-form-footer'></footer> 
-            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(TransportationForm));