import React from 'react';
import "./Navbar.css"
import logo from "../assets/Ready-Set-Grow_Logo 1.png"

function Navbar() {
  return (
    <div className="nav">
        <ul className="nav-menu">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="first-three-menu">
            <li className="nav-item">Home</li>

            <li className="nav-item">Events</li>

            <li className="nav-item">About us</li>
          </div>

          <div className="two-last-menu">
            <li className="nav-learn-more">Learn More</li>

            <li className="nav-register-now">Register Now</li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar;
