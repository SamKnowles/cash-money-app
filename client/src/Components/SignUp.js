import React, { Component } from 'react';
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../Redux/auth";
import "../Styles/signup.css"



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

    handleChange(e) {
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.signup;
        {/* use authErrCode.login in login component */}
                let errMsg = "";
                if (authErrCode < 500 && authErrCode > 399) {
                    errMsg = "Invalid username or password!";
                } else if (authErrCode > 499) {
                    errMsg = "Server error!";
                }
        return (
            <div className='login-signup-form-wrapper'>
                <SignupForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />

            </div>

        )
    }
}

export default connect(state => state.auth, { signup })(Signup);  

