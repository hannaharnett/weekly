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
      <div>
        <h4>weekly</h4>
        <p>by Hannah Arnett</p>
      </div>
    </footer>
  );
};

export default Footer;
