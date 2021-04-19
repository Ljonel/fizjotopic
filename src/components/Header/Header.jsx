import React, { useState } from "react";
import "../../styles/Header.scss";
import Burger from "./Burger";
import { NavLink } from "react-router-dom";

const Header = () => {
  let width = window.innerWidth;

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
        <img src="img/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
