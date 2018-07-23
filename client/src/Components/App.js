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
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />
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
                    <Route path="/profile" component={Profile} />
                    <ProtectedRoute path="/budget" component={Budget} />
                    <Route path="/form" component={FormSequence} />
                    {/* <Route path="/loans" component={Loans} />
                    <Route path="/entertainment" component={Entertainment} />
                    <Route path="/transportation" component={Transportation} /> */}

                </Switch>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, { verifyUser })(App))