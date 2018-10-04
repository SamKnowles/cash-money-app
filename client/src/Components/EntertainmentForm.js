import React, { Component } from 'react'
import { connect } from "react-redux";
import { submitBudget } from "../Redux/budget";

import { withRouter } from "react-router-dom";


class EntertainmentForm extends Component {


    render() {
        let { formData, handleChange, handleSubmit } = this.props;
        return (
            <div className="form-container">
                <div className='form-title-wrapper'>
                    <h1>Entertainment</h1>
                </div>
                {/* <div class="progress-light-grey">
                    <div class="progress-grey" style={{ "height": "24px", "width": "80%" }}>80%</div>
                </div> */}
                <div className='cat-form-instructions' style={{marginTop: '70px'}}>Fill out this form then click the "Budget" button at the bottom.</div>
                <div className='mid-section-wrapper'>
                <div className='cat-form-wrapper'>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Movies</label>
                        <span className='form-dollar-sign'>$</span><input name="movies" placeholder='0.00' className='cat-input-wrapper' value={formData.movies.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Music</label>
                        <span className='form-dollar-sign'>$</span><input name="music" placeholder='0.00' className='cat-input-wrapper' value={formData.music.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Vacation</label>
                        <span className='form-dollar-sign'>$</span><input name="vacation" placeholder='0.00' className='cat-input-wrapper' value={formData.vacation.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Theater</label>
                        <span className='form-dollar-sign'>$</span><input name="theater" placeholder='0.00' className='cat-input-wrapper' value={formData.theater.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Sports</label>
                        <span className='form-dollar-sign'>$</span><input name="sports" placeholder='0.00' className='cat-input-wrapper' value={formData.sports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Winter Sports</label>
                        <span className='form-dollar-sign'>$</span><input name="winterSports" placeholder='0.00' className='cat-input-wrapper' value={formData.winterSports.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                    <div className='form-category-wrapper'>
                        <label className="form-category-name">Other</label>
                        <span className='form-dollar-sign'>$</span><input name="other" placeholder='0.00' className='cat-input-wrapper' value={formData.other.projected} type="number" onChange={e => handleChange(e, "entertainment")} />
                    </div>
                </div>
                </div>
                <div className='link-wrapper'>
                    <div className='a-link' to="/budget" onClick={handleSubmit}>Budget</div>
                </div>
                <footer className='cat-form-footer'></footer>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { submitBudget })(EntertainmentForm));