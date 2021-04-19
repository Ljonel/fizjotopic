import React, { useState } from "react";
import "../../styles/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="header-nav-title">
          <h1>
            Fizjo<span>Topic</span>
          </h1>
          <h3>Kacper Chojowski</h3>
        </div>

        <div className="header-nav-menu">
          <ul>
            <NavLink to="/">
              <li>O mnie</li>
            </NavLink>
            <NavLink to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/gabinet">
              <li>Gabinet</li>
            </NavLink>
            <NavLink to="/kontakt">
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="header-logo">
        <a className="scroll-on-top" href="#top">
          <img
            href="#top"
            src="https://Ljonel.github.io/fizjotopic/img/logo.png"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
