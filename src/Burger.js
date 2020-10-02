import React, { useState } from "react";
import NavItems from "./NavItems";
import "./burger.scss";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  const keyHandler = (e) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
    }
  };
  return (
    <>
      <button
        onKeyUp={keyHandler}
        className={`burger-btn ${open ? "open-burger" : null}`}
        onClick={clickHandler}
      >
        <div className="burger-container" tabIndex="-1">
          <span className={open ? "open-burger" : null} />
          <span className={open ? "open-burger" : null} />
          <span className={open ? "open-burger" : null} />
        </div>
      </button>
      <NavItems open={open} onClick={clickHandler} keyUp={keyHandler} />
    </>
  );
};

export default Burger;
