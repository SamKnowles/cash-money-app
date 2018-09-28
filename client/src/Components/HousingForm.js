import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { Link, withRouter } from "react-router-dom";


class HousingForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Housing</h1>
                </div>
                {/* <div class="progress-light-grey">
                    <div class="progress-grey" style={{ "height": "24px", "width": "20%" }}>20%</div>
                </div> */}
                <div style={{marginTop:'50px'}} className='cat-form-instructions'>Fill out this form then click the "Transportation" button at the bottom.</div>
                <div className='mid-section-wrapper'>
                    <div className='cat-form-wrapper'>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Mortgage/ Rent</label>
                            <span className='form-dollar-sign'>$</span><input name="mortgageRent" placeholder="0.00" className='cat-input-wrapper' type="number" value={formData.mortgageRent.projected} onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Phone</label>
                            <span className='form-dollar-sign'>$</span><input name="phone" placeholder="0.00" className='cat-input-wrapper' value={formData.phone.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Gas</label>
                            <span className='form-dollar-sign'>$</span><input name="gas" placeholder="0.00" className='cat-input-wrapper' value={formData.gas.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Electricity</label>
                            <span className='form-dollar-sign'>$</span><input name="electricity" placeholder="0.00" className='cat-input-wrapper' value={formData.electricity.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Water/ Sewer</label>
                            <span className='form-dollar-sign'>$</span><input name="waterSewer" placeholder="0.00" className='cat-input-wrapper' value={formData.waterSewer.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Internet</label>
                            <span className='form-dollar-sign'>$</span><input name="internet" placeholder="0.00" className='cat-input-wrapper' value={formData.internet.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Waste Removal</label>
                            <span className='form-dollar-sign'>$</span><input name="wasteRemoval" placeholder="0.00" className='cat-input-wrapper' value={formData.wasteRemoval.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Maintenance</label>
                            <span className='form-dollar-sign'>$</span><input name="maintenance" placeholder="0.00" className='cat-input-wrapper' value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Supplies</label>
                            <span className='form-dollar-sign'>$</span><input name="supplies" placeholder="0.00" className='cat-input-wrapper' value={formData.supplies.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                        <div className='form-category-wrapper'>
                            <label className="form-category-name">Other</label>
                            <span className='form-dollar-sign'>$</span><input name="other" placeholder="0.00" className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                        </div>
                    </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' to="/form/transportation">Transportation</Link>
                </div>
                {/* <footer className='cat-form-footer'></footer> */}
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(HousingForm));