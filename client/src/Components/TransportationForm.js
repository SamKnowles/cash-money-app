import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class TransportationForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        console.log(formData);
        return (
            <div>
                <h1>Transportation</h1>
                <input name="vehiclePayment" type="number" value={formData.vehiclePayment} onChange={e => handleChange(e, "transportation")} />
                <input name="busTrainUber" value={formData.busTrainUber} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="insurance" value={formData.insurance} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="licensing" value={formData.licensing} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="fuel" value={formData.fuel} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="maintenance" value={formData.maintenance} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="other" value={formData.other} type="number" onChange={e => handleChange(e, "transportation")} />
                <Link to="/form/loans">loans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(TransportationForm));