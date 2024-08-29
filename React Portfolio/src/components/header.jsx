import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact>About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Me!</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resume">My Resume</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

