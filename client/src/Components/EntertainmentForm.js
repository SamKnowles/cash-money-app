import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class EntertainmentForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        console.log(formData)
        return (
            <div>
                <h1>Entertainment</h1>
                <input name="movies" value={formData.movies} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="music" value={formData.music} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="vacation" value={formData.vacation} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="theater" value={formData.theater} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="sports" value={formData.sports} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="winterSports" value={formData.winterSports} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="other" value={formData.other} type="number" onChange={e => handleChange(e, "entertainment")} />
                <Link to="/form/housing">Housing</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(EntertainmentForm));