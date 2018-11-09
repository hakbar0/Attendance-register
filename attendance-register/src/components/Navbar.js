import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import Logo from '../images/curtis-law-solicitors.png'

const Navbar = () => {
    return (
        <div>
            <div className="logo test">
                <img src={Logo} alt='logo' width='200px' height ='75px' />
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;