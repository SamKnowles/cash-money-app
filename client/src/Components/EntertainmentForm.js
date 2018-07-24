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
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    componentDidMount() {

    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    entertainment: {
                        [name]: {
                            actual: prevState.inputs.entertainment[name].actual,
                            projected: value
                        }
                    }
                }
            }
        });
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.addCategory(this.state.inputs)
    }

    render() {
        console.log(this.props)
        
        let { entertainment } = this.state.inputs;
        return (
            <Switch>
                <Route  path='/form/home' component={(props) => {
                    return (
                        <div>
                            <h1>entertainment</h1>
                            <form action="">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </form>
                            <Link to="/form/transportation">trans</Link>
                        </div>
                    )
                }} />
                <Route path='/form/transportation' component={(props) => {
                    return (
                        <div>
                            <h1>transportation</h1>
                            <Link to="/form/loans">loans</Link>
                        </div>
                    )
                }} />
                <Route path='/form/loans' component={(props) => {
                    return (
                        <div>
                            <h1>loans</h1>
                            <button>Submit</button>
                        </div>
                    )
                }} />

            </Switch>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(EntertainmentForm));