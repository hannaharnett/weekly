export const tabPress = (e, ref) => {
  const focusableElements = ref.current.querySelectorAll(
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

export const keyListener = (e, map) => {
  const listener = map.get(e.keyCode || e.key); //cross-browser
  return listener && listener(e);
};
