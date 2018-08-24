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
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Mortgage/ Rent</label>
                        <input name="mortgageRent" className='cat-input-wrapper' type="number" value={formData.mortgageRent.projected} onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Phone</label>
                        <input name="phone" className='cat-input-wrapper' value={formData.phone.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Gas</label>
                        <input name="gas" className='cat-input-wrapper' value={formData.gas.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Electricity</label>
                        <input name="electricity" className='cat-input-wrapper' value={formData.electricity.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Water/ Sewer</label>
                        <input name="waterSewer" className='cat-input-wrapper' value={formData.waterSewer.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Internet</label>
                        <input name="internet" className='cat-input-wrapper' value={formData.internet.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Waste Removal</label>
                        <input name="wasteRemoval" className='cat-input-wrapper' value={formData.wasteRemoval.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Maintenance</label>
                        <input name="maintenance" className='cat-input-wrapper' value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Supplies</label>
                        <input name="supplies" className='cat-input-wrapper' value={formData.supplies.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <input name="other" className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                    </div>
                    </div>
                    <div className='link-wrapper'>
                        <Link className='a-link' to="/form/transportation">Transportation</Link>
                </div>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(HousingForm));