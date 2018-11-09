import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;