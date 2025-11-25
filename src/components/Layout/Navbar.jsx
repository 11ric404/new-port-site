import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-symbol">&gt;_</span> Ric Rebull <span className="logo-divider">|</span> <span className="logo-highlight">Portfolio</span>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Experience</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
