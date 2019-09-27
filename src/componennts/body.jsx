import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <div className="bodyimage">
      <NavLink
        className="btn btn-secondary button fontsize bodytext"
        to="/search"
      >
        Click to carry out your Home Search
      </NavLink>
    </div>
  );
};

export default Body;
