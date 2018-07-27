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
                    <input name="mortgageRent" value={this.state.housing.mortgageRent} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="phone" value={this.state.housing.phone} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="gas" value={this.state.housing.gas} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="electricity" value={this.state.housing.electricity} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="waterSewer" value={this.state.housing.waterSewer} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="internet" value={this.state.housing.internet} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="wasteRemoval" value={this.state.housing.wasteRemoval} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="maintenance" value={this.state.housing.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="supplies" value={this.state.housing.supplies} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="other" value={this.state.housing.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                <Link to="/form/transportation">trans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(HousingForm));