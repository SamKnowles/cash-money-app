import React from 'react';
import '../Styles/login.css';

function LoginForm(props) {
    return (
        <div className="form-wrapper">
        <button className='submit-button-wrapper' type="submit">Login</button>
            <form className="login-wrapper" onSubmit={props.handleSubmit}>
                <div className='username-wrapper'>
                    <input
                        className='username-input signup-input'
                        onChange={props.handleChange}
                        value={props.username}
                        name="username"
                        type="text"
                        placeholder="Username" />
                </div>
                <div className='password-wrapper'>
                    <input
                        className='password-input signup-input'
                        onChange={props.handleChange}
                        value={props.password}
                        name="password"
                        type="password"
                        placeholder="Password" />
                </div>
            </form>
        </div>
        
    )
}

export default LoginForm;