import React from "react";
import { NavLink as Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar(props) {
  const navBarOpen = () => {
    if (props.navbarClickHandler) {
      return "nav--list_open";
    } else {
      return "";
    }
  };

  return (
    <nav className="mobile_nav">
      <div class="container">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <ul className="">
        <li>
          <Link exact to="/">
            <span className="primary-color">01. </span>Home
          </Link>
        </li>
        <li>
          <Link to="/about/">
            <span className="primary-color">02. </span>About
          </Link>
        </li>
        <li>
          <Link to="/work/">
            <span className="primary-color">03. </span>Work
          </Link>
        </li>
        <li>
          <Link to="/contact/">
            <span className="primary-color">04. </span>Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
