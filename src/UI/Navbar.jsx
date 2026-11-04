import React from 'react'
import { Link } from "react-router-dom";
function Navbar({ goHome }) {
  return (
   <nav className="navbar">
        <div className="nav-container">
		<Link to="/" className="brand-logo" onClick={goHome}>
            <i className="fa-solid fa-film logo-icon"></i>
            <span className="logo-text">One Movie</span>
          </Link>
        </div>
      </nav>
  )
}

export default Navbar;

