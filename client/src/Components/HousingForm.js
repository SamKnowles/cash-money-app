import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class HousingForm extends Component {
    render() {
        let { formData, handleChange, handleSubmit } = this.props;
        console.log(formData);
        return (
            <div>
                <h1>Housing</h1>
                <input name="mortgageRent" type="number" value={formData.mortgageRent} onChange={e => handleChange(e, 'housing')} />
                <input name="phone" value={formData.phone} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="gas" value={formData.gas} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="electricity" value={formData.electricity} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="waterSewer" value={formData.waterSewer} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="internet" value={formData.internet} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="wasteRemoval" value={formData.wasteRemoval} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="maintenance" value={formData.maintenance} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="supplies" value={formData.supplies} type="number" onChange={e => handleChange(e, 'housing')} />
                <input name="other" value={formData.other} type="number" onChange={e => handleChange(e, 'housing')} />
                <Link to="/form/transportation" onClick={handleSubmit}>transportation</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(HousingForm));