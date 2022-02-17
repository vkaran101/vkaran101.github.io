import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li className="nav-item">
                        <Link to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    );
  }
  
  export default Navbar;
  