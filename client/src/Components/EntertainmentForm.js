import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class EntertainmentForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        return (
            <div>
                <h1>Entertainment</h1>
                <input name="movies" value={formData.movies} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="music" value={formData.music} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="vacation" value={formData.vacation} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="theater" value={formData.theater} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="sports" value={formData.sports} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="winterSports" value={formData.winterSports} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <input name="other" value={formData.other} type="text" onChange={e => this.handleChange(e, "entertainment")} />
                <Link to="/form/transportation">trans</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(EntertainmentForm));