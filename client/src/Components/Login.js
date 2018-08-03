import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../Redux/auth';
import '../Styles/login.css';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange = e => {
        e.persist();
        this.setState((prevState) => {
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
                username: "",
                password: ""
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }
    render() {
        // let authErrCode = this.props.authErrCode.login;
        // let errMsg = "";
        // if (authErrCode < 500 && authErrCode > 399) {
        //     errMsg = "Invalid username or password!";
        // } else if (authErrCode > 499) {
        //     errMsg = "Server error!";
        // }
        return (
            <div className='login-signup-form-wrapper'>

                <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state.inputs} />
            </div>

        )
    }
}

export default connect(state => state.auth, { login })(Login);  
