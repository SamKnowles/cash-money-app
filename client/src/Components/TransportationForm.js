import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { Link, withRouter } from "react-router-dom";


class TransportationForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Transportation</h1>
                <input name="vehiclePayment" type="number" value={formData.vehiclePayment.projected} onChange={e => handleChange(e, "transportation")} />
                <input name="busTrainUber" value={formData.busTrainUber.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="insurance" value={formData.insurance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="licensing" value={formData.licensing.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="fuel" value={formData.fuel.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="maintenance" value={formData.maintenance.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "transportation")} />
                <Link to="/form/loans">loans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(TransportationForm));