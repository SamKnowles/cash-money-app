import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const isAuthenticated = this.props.auth.isAuthenticated;
        const Component = this.props.component;
        const path = this.props.path;
        return (
            isAuthenticated ?
                <Route path={path} render={(props) => {
                    return <Component {...props} />
                }} /> :
                <Redirect to="/" />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, {})(ProtectedRoute); 