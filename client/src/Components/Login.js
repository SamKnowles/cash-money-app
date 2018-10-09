import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Navbar from "./Navbar";
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

        return (
            <div className='login-signup-form-wrapper'>
                <Navbar />
                <div className='login-logout-words'>Login and Continue Budgeting Today!</div>
                <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state.inputs} />
            </div>
        )
    }
}

export default connect(state => state.auth, { login })(Login);  
