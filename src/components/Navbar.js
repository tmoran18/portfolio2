import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

import "../styles/navbar.css";
import "../styles/normalize.css";

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
      setNavVisibility(false);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    if (isNavVisible) {
      setNavVisibility(false);
    } else {
      setNavVisibility(true);
    }
  };

  return (
    <nav>
      <div>
        <img src="Asset-921.png" width="150" alt="" />
      </div>
      <div
        className={isSmallScreen ? "burger" : "hideBurger"}
        onClick={toggleNav}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul
        // If not mobile size className = ""
        // else if is mobile size && navIsVisible - Open
        // else !navIsVisible - Close
        className={
          !isSmallScreen
            ? ""
            : isSmallScreen && isNavVisible
            ? "mobileNav--list open"
            : "mobileNav--list closed"
        }
      >
        <li>
          <Link exact to="/" activeStyle={{ color: "var(--secondary-color)" }}>
            <span className="primary-color">01. </span>Home
          </Link>
        </li>
        <li>
          <Link to="/about/" activeStyle={{ color: "var(--secondary-color)" }}>
            <span className="primary-color">02. </span>About
          </Link>
        </li>
        <li>
          <Link to="/work/" activeStyle={{ color: "var(--secondary-color)" }}>
            <span className="primary-color">03. </span>Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact/"
            activeStyle={{ color: "var(--secondary-color)" }}
          >
            <span className="primary-color">04. </span>Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
