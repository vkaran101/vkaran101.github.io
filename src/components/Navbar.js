import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li className="navbar-item">
                        <Link to="/">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    );
  }
  
  export default Navbar;
  