import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { Link, withRouter } from "react-router-dom";


class EntertainmentForm extends Component {


    render() {
        let { formData, handleChange, handleSubmit } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Entertainment</h1>
                </div>
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Movies</label>
                        <input name="movies" value={formData.movies.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Music</label>
                        <input name="music" value={formData.music.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Vacation</label>
                        <input name="vacation" value={formData.vacation.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Theater</label>
                        <input name="theater" value={formData.theater.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Sports</label>
                        <input name="sports" value={formData.sports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Winter Sports</label>
                        <input name="winterSports" value={formData.winterSports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <input name="other" value={formData.other.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                </div>
                <div className='link-wrapper'>
                    <Link className='a-link' to="/budget" onClick={handleSubmit}>Budget</Link>
                </div>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(EntertainmentForm));