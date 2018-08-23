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
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Vehicle Payment</label>
                        <input name="vehiclePayment" type="number" value={formData.vehiclePayment.projected} onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Train/ Uber</label>
                        <input name="busTrainUber" value={formData.busTrainUber.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Insurance</label>
                        <input name="insurance" value={formData.insurance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Licensing</label>
                        <input name="licensing" value={formData.licensing.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Fuel</label>
                        <input name="fuel" value={formData.fuel.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Maintenance</label>
                        <input name="maintenance" value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                    </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' to="/form/loans">Loans</Link>
                </div>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(TransportationForm));