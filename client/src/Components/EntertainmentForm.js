import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class EntertainmentForm extends Component {


    render() {
        let { formData, handleChange, handleSubmit } = this.props;
        return (
            <div>
                <h1>Entertainment</h1>
                <input name="movies" value={formData.movies.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="music" value={formData.music.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="vacation" value={formData.vacation.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="theater" value={formData.theater.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="sports" value={formData.sports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="winterSports" value={formData.winterSports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                <Link to="/budget" onClick={handleSubmit}>Housing</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(EntertainmentForm));