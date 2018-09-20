import React, { Component } from 'react';
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../Redux/auth";
import Navbar from "./Navbar";
import "../Styles/signup.css";



class Signup extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = (e) => {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <div className='login-signup-form-wrapper'>
            <Navbar />
            <div className='login-logout-words'>Signup And Start Budgeting Today!</div>
                <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state.inputs} />
            </div>
        )
    }
}

export default connect(state => state.auth, { signup })(Signup);  
