import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from '../Redux/auth';
import Navbar from './Navbar';
import Entertainment from './Entertainment';
import Loans from './Loans';
import Housing from './Housing';
import Transportation from './Transportation';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Budget from './Budget';
import FormSequence from "./FormSequence";
import '../Styles/app.css';



class App extends Component {
    componentDidMount = () => {
        this.props.verifyUser()
    }

    render() {
        // const { loading } = this.props;
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />
                {/* {loading ?
                    <div>...Loading user data </div>
                    : */}
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/profile" /> :
                                <Signup {...props} />
                        }} />
                        <Route path="/login" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/profile" /> :
                                <Login {...props} />
                        }} />
                        <Route path="/signup" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/profile" /> :
                                <Signup {...props} />
                        }} />
                        <ProtectedRoute path="/profile" component={Profile} />
                        <ProtectedRoute path="/budget" component={Budget} />
                        <ProtectedRoute path="/form" component={FormSequence} />
                        <ProtectedRoute path="/housing" component={Housing} />
                        <ProtectedRoute path="/transportation" component={Transportation} />
                        <ProtectedRoute path="/loans" component={Loans} />
                        <ProtectedRoute path="/entertainment" component={Entertainment} />
                    </Switch>
                }
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(state => state.auth, {verifyUser})(App))