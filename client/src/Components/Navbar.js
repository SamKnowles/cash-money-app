import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Redux/auth';
import '../Styles/navbar.css';



class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const isAuthenticated = this.props.auth.isAuthenticated;
        return (
            <div className='nav-wrapper'>
                <div className="navbar-item">
                    {isAuthenticated ? null : <div className="nav-link"><Link to="/login">Login</Link></div>}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? null : <div className="nav-link"><Link to="/signup">Sign Up</Link></div>}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/home">Home</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div  className="nav-link"><Link to="/entertainment">Entertainment</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ?  <div className="nav-link"><Link to="/loans">Loans</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/transportation">Transportation</Link></div> : null}
                </div>
                <div className="navbar-item">
                    {isAuthenticated ? <div className="nav-link"><Link to="/housing">Housing</Link></div> : null}
                </div>
                <div className="navbar-item">
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