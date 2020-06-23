import React from "react";
import { NavLink as Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar(props) {
  return (
    <nav className="mobile_nav">
      <button onClick={props.navbarClickHandler}>Buttons</button>
      <div className="container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={props.isOpen ? "nav--list_open" : "nav--list_closed"}>
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
