import React, { useEffect, createRef } from "react";
import { createPortal } from "react-dom";

import "./modal.scss";

const Modal = ({ children, show, hide, role = "dialog" }) => {
  const modalRef = createRef();

  // set focus inside modal when opened
  useEffect(() => {
    show && modalRef.current.querySelector("button").focus();
  });

  useEffect(() => {
    const keyListener = (e) => {
      const listener = keyListenersMap.get(e.keyCode || e.key); //cross-browser
      return listener && listener(e);
    };

    show && document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  const handleTabPress = (e) => {
    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        return e.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        return e.preventDefault();
      }
    }
  };

  const keyListenersMap = new Map([
    [27, hide],
    ["Escape", hide],
    [9, handleTabPress],
  ]);

  const content = show && (
    <div className="overlay" role={role} aria-modal="true" ref={modalRef}>
      <div className="modal">
        <span className="visually-hidden" id="modal-close">
          Close dialog
        </span>
        <button
          className="modal-close"
          aria-labelledby="modal-close"
          onClick={hide}
        >
          x
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return <>{createPortal(content, document.body)}</>;
};

export default Modal;
