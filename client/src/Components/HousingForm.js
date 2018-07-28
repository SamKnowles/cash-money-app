import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class HousingForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>housing</h1>
                <input name="mortgageRent" type="text" value={formData.rent} onChange={e => handleChange(e, "housing")} />
                <input name="phone" value={formData.phone} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="gas" value={formData.gas} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="electricity" value={formData.electricity} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="waterSewer" value={formData.waterSewer} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="internet" value={formData.internet} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="wasteRemoval" value={formData.wasteRemoval} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="maintenance" value={formData.maintenance} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="supplies" value={formData.supplies} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <input name="other" value={formData.other} type="text" onChange={e => this.handleChange(e, 'housing')} />
                <Link to="/form/transportation">trans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(HousingForm));