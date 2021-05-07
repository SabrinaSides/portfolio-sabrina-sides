import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h3 className='header-name'>Sabrina Sides</h3>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
