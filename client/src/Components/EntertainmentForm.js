import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class EntertainmentForm extends Component {
    constructor(props) {
        super(props);
        let { entertainment } = props;
        this.state = {
            inputs: {
                entertainment: {
                    movies: {
                        projected: '',
                    },
                    music: {
                        projected: '',
                    },
                    vacation: {
                        projected: '',
                    },
                    theater: {
                        projected: '',
                    },
                    sports: {
                        projected: '',
                    },
                    winterSports: {
                        projected: '',
                    },
                    other: {
                        projected: '',
                    },
                }
            }
        }
    }


    render() {
        console.log(this.props)
        let { entertainment } = this.state.inputs;
        return (
            <div>
                <h1>entertainment</h1>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
                <Link to="/form/transportation">trans</Link>
            </div>
        )
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(EntertainmentForm));