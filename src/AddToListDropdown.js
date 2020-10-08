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
    const focusableElem = dropdownListRef.current.querySelectorAll("button");
    // create array from node list
    const focusable = [...focusableElem];
    // index of current elem
    const index = focusable.indexOf(document.activeElement);
    let nextIndex = 0;

    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
    if (e.keyCode === 38) {
      // up arrow
      e.preventDefault();
      nextIndex = index > 0 ? index - 1 : 0;
      focusableElem[nextIndex].focus();
    } else if (e.keyCode === 40) {
      // down arrow
      e.preventDefault();
      nextIndex = index + 1 < focusable.length ? index + 1 : index;
      focusableElem[nextIndex].focus();
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
    <div className="dropdown-wrap">
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
        <ul
          className="dropdown-ul"
          ref={dropdownListRef}
          role="list"
          onKeyDown={keyHandler}
        >
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
