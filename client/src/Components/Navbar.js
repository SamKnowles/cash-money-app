import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Redux/auth';
import '../Styles/navbar.css';



class Navbar extends Component {

    

    render() {
        const isAuthenticated = this.props.auth.isAuthenticated;
        console.log(this.props);
        return (
            <div className='nav-wrapper'>
                <div className="navbar-item">
                    {isAuthenticated ? null : <div className="nav-link" ><NavLink className='login-signup-link' activeClassName="selected" activeStyle={{backgroundColor:'#1e90ff', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', border: '1px solid black' }} exact to="/login">Login</NavLink></div>}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? null : <div className="nav-link"><NavLink className='login-signup-link' activeClassName="selected" activeStyle={{backgroundColor:'#1e90ff', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', border: '1px solid black' }} exact to="/signup">Sign Up</NavLink></div>}
                </div>
                {/* <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/form/home">Home</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div  className="nav-link"><Link to="/form/entertainment">Entertainment</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/form/loans">Loans</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/form/transportation">Transportation</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/form/housing">Housing</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/budget">Budget</Link></div> : null}
                </div> */}
                <div className="logout-link">
                    {isAuthenticated ? <div className="nav-link"><button onClick={this.props.logout}>Logout</button></div> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, { logout })(Navbar);