import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="container py-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">
            &copy; {year} Azmo Maison
          </small>
        </div>
        <div className="col-6 col-md">
          <NavLink
            className="list-unstyled text-small text-muted fontsize"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="col-6 col-md">
          <NavLink
            className="list-unstyled text-small text-muted fontsize"
            to="www.twitter.com"
          >
            Company
          </NavLink>
        </div>
        <div className="col-6 col-md">
          <NavLink
            className="list-unstyled text-small text-muted fontsize"
            to="www.twitter.com"
          >
            Community
          </NavLink>
        </div>
        <div className="col-6 col-md">
          <NavLink
            className="list-unstyled text-small text-muted fontsize"
            to="www.twitter.com"
          >
            Terms&Conditions
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
