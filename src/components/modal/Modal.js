import React, { useEffect, createRef } from "react";
import { createPortal } from "react-dom";
import { tabPress, keyListener } from "../../utils/helperFunctions";

import "./modal.scss";

const Modal = ({ children, show, hide, role = "dialog" }) => {
  const modalRef = createRef();

  // set focus inside modal when opened
  useEffect(() => {
    show && modalRef.current.querySelector("button").focus();
  });

  useEffect(() => {
    const handleKeyListener = (e) => {
      keyListener(e, keyListenersMap);
    };

    show && document.addEventListener("keydown", handleKeyListener);
    return () => document.removeEventListener("keydown", handleKeyListener);
  });

  const handleTabPress = (e) => {
    tabPress(e, modalRef);
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
