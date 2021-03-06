import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-wrapper teal lighten-2">
    <div className="container">
    <h4 className="brand-logo">PokeTimes</h4>
    <ul className="right">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
    </nav>
  )
}

export default NavBar;
