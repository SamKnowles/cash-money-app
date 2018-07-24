import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class TransportationForm extends Component {
    constructor(props) {
        super(props);
        let { trans } = props;
        this.state = {
            inputs: {
                trans: {
                    vehiclePayment: {
                        projected: '',
                    },
                    busTrainUber: {
                        projected: '',
                    },
                    insurance: {
                        projected: '',
                    },
                    licensing: {
                        projected: '',
                    },
                    fuel: {
                        projected: '',
                    },
                    maintenance: {
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
                    trans: {
                        [name]: {
                            actual: prevState.inputs.trans[name].actual,
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
        
        let { trans } = this.state.inputs;
        return (
            <Switch>
                <Route  path='/form/home' component={(props) => {
                    return (
                        <div>
                            <h1>trans</h1>
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


export default withRouter(connect(state => state, { addCategory })(TransportationForm));