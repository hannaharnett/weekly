import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <h1>weekly</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
    </nav>
  );
};

export default Navbar;
