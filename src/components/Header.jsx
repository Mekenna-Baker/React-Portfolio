import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Mekenna Baker</NavLink>

                    {/* Hamburger button  to handle navbar on smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* Hamburger icon */}
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {/*Navbar list items with navlink to navigate to corresponding part of the website when the file path matches  */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" >About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resume">My Resume</NavLink>
                                </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

