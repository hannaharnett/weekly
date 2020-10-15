import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-ul">
        <li>
          <Link to="#">about</Link>
        </li>
        <li>
          <Link to="#">contact</Link>
        </li>
        <li>
          <Link to="#">blog</Link>
        </li>
      </ul>
      <div className="footer-credits">
        <h3 className="footer-logo">weekly</h3>
        <p>by Hannah Arnett</p>
        <p>
          Icons by{" "}
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="new-window"
          >
            icons8.com
            <img
              src="https://img.icons8.com/material-rounded/18/000000/external-link.png"
              alt="external-link-icon"
            />
          </a>
          <span className="visually-hidden" id="new-window">
            Opens in a new window
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
