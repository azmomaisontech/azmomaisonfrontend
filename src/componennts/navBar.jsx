import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarcolor">
      <Link
        className="navbar-brand text-white nav-link font-weight-bold fontsize"
        to="/"
      >
        Azmo Maison
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link  text-white font-weight-bold fontsize"
            to="/product"
          >
            Product
          </NavLink>
          <NavLink
            className="nav-item nav-link  text-white font-weight-bold fontsize"
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </div>
        {!user && (
          <div className="navbar-nav ml-auto ">
            <NavLink
              className="nav-item nav-link text-white font-weight-bold fontsize"
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              className="btn btn-primary  text-white nav-item nav-link  font-weight-bold fontsize "
              to="/register"
            >
              Get Started
            </NavLink>
          </div>
        )}
        {user && (
          <div className="navbar-nav ml-auto ">
            <NavLink
              className="nav-item nav-link text-white font-weight-bold fontsize"
              to="/profile"
            >
              {user.name}
            </NavLink>

            <NavLink
              className="btn btn-primary  text-white nav-item nav-link  font-weight-bold fontsize "
              to="/logout"
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
