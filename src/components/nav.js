import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from '../images/download.png';

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Nav;
