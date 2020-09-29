import React, { useEffect, useState, useRef } from "react";

const AddToListDropdown = ({
  activatorText = "Dropdown",
  items = [],
  onClick,
}) => {
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
    <div onKeyUp={keyHandler}>
      <button
        aria-expanded={isOpen ? "true" : "false"}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {activatorText}
      </button>
      {isOpen && (
        <ul ref={dropdownListRef} role="list">
          {items.map((item, index) => {
            return (
              <li key={index} onClick={clickHandler}>
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
