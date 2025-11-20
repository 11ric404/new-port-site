import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-symbol">&gt;_</span> Ric Rebull <span className="logo-divider">|</span> <span className="logo-highlight">Portfolio</span>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
