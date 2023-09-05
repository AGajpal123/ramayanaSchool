import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Ramayana Foundation School</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/aboutUs">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/features">
              Features
            </NavLink>
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header