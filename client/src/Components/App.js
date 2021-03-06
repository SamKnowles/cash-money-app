import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from '../Redux/auth';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Budget from './Budget';
import FormSequence from "./FormSequence";
import EntertainmentForm from './EntertainmentForm';
import HousingForm from './HousingForm';
import LoansForm from './LoansForm';
import TransportationForm from './TransportationForm';
import '../Styles/app.css';



class App extends Component {
    componentDidMount = () => {
        this.props.verifyUser();
    }

    render() {
        const {isAuthenticated, loading} = this.props;
        return (
            !loading ?
            <div className="app-wrapper">
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/budget" /> :
                                <Redirect to="/signup" />
                        }} />
                        <Route path="/login" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/budget" /> :
                                <Login {...props} />
                        }} />
                        <Route path="/signup" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/form/housing" /> :
                                <Signup {...props} />
                        }} />
                        <ProtectedRoute path="/profile" component={Profile} />
                        <ProtectedRoute path="/budget" component={Budget} />
                        <ProtectedRoute path="/form" component={FormSequence} />
                        <ProtectedRoute path="/housing" component={HousingForm} />
                        <ProtectedRoute path="/transportation" component={TransportationForm} />
                        <ProtectedRoute path="/loans" component={LoansForm} />
                        <ProtectedRoute path="/entertainment" component={EntertainmentForm} />
                    </Switch>
            </div>
            :
            <div>Loading user data...</div>
        )
    }
}



// const mapStateToProps = (state) => {
//     return state
// }

export default withRouter(connect(state => state.auth, {verifyUser})(App))
