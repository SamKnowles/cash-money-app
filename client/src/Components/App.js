import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from '../Redux/auth';
import Navbar from './Navbar';
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
        this.props.verifyUser()
    }

    render() {
        // const { loading } = this.props;
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />             
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/budget" /> :
                                <Signup {...props} />
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
        )
    }
}



// const mapStateToProps = (state) => {
//     return state
// }

export default withRouter(connect(state => state.auth, {verifyUser})(App))

