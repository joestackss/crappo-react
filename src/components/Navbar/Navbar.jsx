import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="containers w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between nav-width">
            <Link to="/" className="navbar-brand fs-26">
              <img src="merglow-logo.svg" alt="logo" />
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav nav-width-1">
                <li className="text-black">
                  <Link to="/Shop">Product</Link>
                </li>
                <li className="text-black">
                  <Link to="/Science">Feature</Link>
                </li>
                <li className="text-black">
                  <Link to="/About Us">About</Link>
                </li>
                <li className="text-black">
                  <Link to="/About Us">Contact</Link>
                </li>
                <li className="text-black">
                  <Link to="/About Us">Login</Link>
                </li>
              </ul>
              <div className="flex navbar-btns">
                <button type="button" className="btn">
                  <span>Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;