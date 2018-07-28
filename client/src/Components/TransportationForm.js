import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class TransportationForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Transportation</h1>
                <input name="vehiclePayment" value={formData.vehiclePayment} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="busTrainUber" value={formData.busTrainUber} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="insurance" value={formData.insurance} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="licensing" value={formData.licensing} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="fuel" value={formData.fuel} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="maintenance" value={formData.maintenance} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <input name="other" value={formData.other} type="text" onChange={e => this.handleChange(e, "transportation")} />
                <Link to="/form/transportation">trans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(TransportationForm));