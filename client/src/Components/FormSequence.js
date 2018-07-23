import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Switch, Route, Link, withRouter } from "react-router-dom";


class FormSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housing: {
                rent: ""
            },
            transportation: {},
            loans: {}
        }

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }
    
    handleChange = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                [category]:{
                    ...prevState[category],
                    [name]: value
                }
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Switch>
                    <Route exact path='/form' render={props => {
                        return (
                            <div>
                                <h3>Start budgeting</h3>
                                <Link to="/form/housing">Housing</Link>
                            </div>
                        )
                    }} />
                    <Route path='/form/:category' render={(props) => {
                        {/* render component that will render each input conditionally based on props */}
                        switch (props.match.params.category) {
                            case "loans":
                                return (
                                    <form onSubmit={this.handleSubmit}>
                                    <h3>loans</h3>
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <button>Submit</button>
                                        <Link to="/form/">Start Over</Link>
                                    </form>
                                )
                            case "transportation":
                                return (
                                    <form action="">
                                    <h3>trans</h3>
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <Link to="/form/loans">loans</Link>
                                    </form>
                                )
                            case "housing":
                                return (
                                    <form action="">
                                        <h3>Housing</h3>
                                        <input type="text" />
                                        <input type="text" />
                                        <input name="rent" value={this.state.housing.rent} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <Link to="/form/transportation">trans</Link>
                                    </form>
                                )
                        }
                    }} />
                </Switch>
            </div>
        )
    }
}

FormSequence.propTypes = {

}

export default FormSequence