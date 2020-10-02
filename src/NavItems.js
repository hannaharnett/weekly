import React from "react";
import { NavLink } from "react-router-dom";

import "./navItems.scss";

const NavItems = ({ open, onClick, keyUp }) => {
  return (
    <ul className={`burger-ul ${open ? "open" : null}`} onKeyUp={keyUp}>
      <li className="nav-link">
        <NavLink to="/" onClick={onClick}>
          Home
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
