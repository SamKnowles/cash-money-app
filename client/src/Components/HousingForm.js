import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class HousingForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Housing</h1>
                <input name="mortgageRent" type="number" value={formData.mortgageRent.projected} onChange={e => handleChange(e, 'housing')} />
                <input name="phone" value={formData.phone.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="gas" value={formData.gas.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="electricity" value={formData.electricity.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="waterSewer" value={formData.waterSewer.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="internet" value={formData.internet.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="wasteRemoval" value={formData.wasteRemoval.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="maintenance" value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="supplies" value={formData.supplies.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, 'housing')} />
                <Link to="/form/transportation">transportation</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(HousingForm));