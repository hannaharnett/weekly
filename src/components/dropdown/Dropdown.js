import React, { useEffect, useState, useRef } from "react";
import { tabPress, keyListener } from "../../utils/helperFunctions";

import "./dropdown.scss";

const AddToListDropdown = ({ activatorText = "•••", items = [], onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const clickHandler = (e) => {
    setIsOpen(!isOpen);
    activatorRef.current.focus();
  };

  useEffect(() => {
    const handleKeyListener = (e) => {
      keyListener(e, keyListenersMap);
    };

    isOpen && document.addEventListener("keydown", handleKeyListener);
    return () => document.removeEventListener("keydown", handleKeyListener);
  });

  const handleTabPress = (e) => {
    tabPress(e, dropdownListRef);
  };

  const keyListenersMap = new Map([
    [27, clickHandler],
    ["Escape", clickHandler],
    [9, handleTabPress],
  ]);

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
        <ul className="dropdown-ul" ref={dropdownListRef}>
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
