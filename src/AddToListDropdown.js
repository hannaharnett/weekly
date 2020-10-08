import React, { useEffect, useState, useRef } from "react";

import "./addToListDropdown.scss";

const AddToListDropdown = ({ activatorText = "•••", items = [], onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const clickHandler = (e) => {
    setIsOpen(!isOpen);
  };
  const keyHandler = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };
  const clickOutsideHandler = (e) => {
    if (
      dropdownListRef.current.contains(e.target) ||
      activatorRef.current.contains(e.target)
    ) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  useEffect(
    function setupListener() {
      if (isOpen) {
        dropdownListRef.current.querySelector("button").focus();
        window.addEventListener("mousedown", clickOutsideHandler);
      }
      return function cleanupListener() {
        window.removeEventListener("mousedown", clickOutsideHandler);
      };
    },
    [isOpen]
  );
  return (
    <div className="dropdown-wrap" onKeyUp={keyHandler}>
      <label htmlFor="dropdown-button" className="visually-hidden">
        More options
      </label>
      <button
        id="dropdown-button"
        className="dropdown-button"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={clickHandler}
        ref={activatorRef}
      >
        <span>{activatorText}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-ul" ref={dropdownListRef} role="list">
          <li className="dropdown-item">Add to a list:</li>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={clickHandler} className="dropdown-item">
                <button onClick={onClick} data-id={item.id}>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AddToListDropdown;
