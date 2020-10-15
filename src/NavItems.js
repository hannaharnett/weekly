import React from "react";
import { NavLink } from "react-router-dom";

import "./navItems.scss";

const NavItems = ({ open, onClick }) => {
  return (
    <ul className={`burger-ul ${open ? "open" : null}`}>
      <li className="nav-link">
        <NavLink to="/lists" onClick={onClick}>
          Lists
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/recipes" onClick={onClick}>
          Recipes
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
