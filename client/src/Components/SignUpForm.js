import React from 'react';

function SignupForm(props) {
    return (
        <div className="form-wrapper">
            <form className='login-wrapper' onSubmit={props.handleSubmit}>
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
                <button className='submit-button-wrapper' type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;