import { useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
    document.querySelector("html").classList.toggle("lock-scroll");
  }

  return {
    show,
    toggle,
  };
};

export default useModal;
