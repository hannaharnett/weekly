import React from "react";
import { NavLink } from "react-router-dom";

import "./navItems.scss";

const NavItems = ({ open, onClick }) => {
  const handleClick = () => {
    // only for mobile navigation
    open && onClick();
  };
  return (
    <ul className={`burger-ul ${open ? "open" : null}`}>
      <li className="nav-link">
        <NavLink to="/lists" onClick={handleClick}>
          Lists
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/recipes" onClick={handleClick}>
          Recipes
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
