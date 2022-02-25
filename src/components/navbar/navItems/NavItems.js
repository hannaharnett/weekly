import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useAuth } from "../../../context/AuthContext";

import "./navItems.scss";

const NavItems = ({ open, onClick }) => {
  const history = useHistory();
  const user = useUser();
  const { authLogout } = useAuth();

  const logout = () => {
    authLogout();
    history.push("/");
    closeMenuHandler();
  };

  const closeMenuHandler = () => {
    // only for mobile navigation
    open && onClick();
  };

  const links = user ? (
    <>
      <li className="nav-link">
        <NavLink to="/lists" onClick={closeMenuHandler}>
          Lists
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/recipes" onClick={closeMenuHandler}>
          Recipes
        </NavLink>
      </li>
      <li className="nav-link">
        <button className="nav-link" onClick={logout}>
          Log out
        </button>
      </li>
    </>
  ) : (
    <>
      <li className="nav-link">
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/login">Log in</NavLink>
      </li>
    </>
  );
  return <ul className={`burger-ul ${open ? "open" : null}`}>{links}</ul>;
};

export default NavItems;
