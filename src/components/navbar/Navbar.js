import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "./hamburger/Burger";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1 className="logo">weekly</h1>
      </NavLink>
      <Burger />
    </nav>
  );
};

export default Navbar;
