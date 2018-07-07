import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

function Navbar() {
    return (
        <div className='nav-wrapper'>
            <Link className='nav-link' to='/'>Body</Link>
            <Link className='nav-link' to='/entertainment'>Entertainment</Link>
            <Link className='nav-link' to='/loans'>Loans</Link>
            <Link className='nav-link' to='/transportation'>Transportation</Link>
            <Link className='nav-link' to='/housing'>Housing</Link>
        </div>
    )
}

export default Navbar
