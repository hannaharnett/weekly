import React, { useRef, useEffect, useState } from "react";
import NavItems from "../navItems/NavItems";
import { tabPress, keyListener } from "../../../utils/helperFunctions";

import "./burger.scss";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef();

  const clickHandler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleKeyListener = (e) => {
      keyListener(e, keyListenersMap);
    };

    open && document.addEventListener("keydown", handleKeyListener);
    return () => document.removeEventListener("keydown", handleKeyListener);
  });

  const handleTabPress = (e) => {
    tabPress(e, burgerRef);
  };

  useEffect(() => {
    if (open) {
      burgerRef.current.querySelector("a").focus();
    } else {
      burgerRef.current.querySelector("button").focus();
    }
  }, [open]);

  const keyListenersMap = new Map([
    [27, clickHandler],
    ["Escape", clickHandler],
    [9, handleTabPress],
  ]);

  return (
    <div className="burger-wrap" ref={burgerRef} tabIndex="-1">
      <button
        className={`burger-btn ${open ? "open-burger" : null}`}
        onClick={clickHandler}
        aria-expanded={open ? "true" : "false"}
        aria-label="Open the menu"
      >
        <div className="burger-content" tabIndex="-1">
          <span className={open ? "open-burger" : null} />
          <span className={open ? "open-burger" : null} />
          <span className={open ? "open-burger" : null} />
        </div>
      </button>
      <NavItems open={open} onClick={clickHandler} />
    </div>
  );
};

export default Burger;
