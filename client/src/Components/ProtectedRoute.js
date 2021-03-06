import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {

    render() {
        const isAuthenticated = this.props.auth.isAuthenticated;
        const ProtectedComponent = this.props.component;
        const path = this.props.path;
        return (
            isAuthenticated ?
                <Route path={path} render={(props) => {
                    return <ProtectedComponent {...props} />
                }} /> :
                <Redirect to="/" />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, {})(ProtectedRoute);