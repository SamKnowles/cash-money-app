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
                    <input name="rent"type="text" value={formData.rent}onChange={e => handleChange(e, "housing")}/>
                    <input type="text" />
                    <input type="text" />
                <Link to="/form/transportation">trans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(HousingForm));