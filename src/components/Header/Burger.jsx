import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu-hamburger-wrapper">
      <i
        className="hamburger fas fa fa-bars"
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="menu-hamburger">
        <ul>
          <NavLink to="/">
            <li>O mnie</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/office">
            <li>Gabinet</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Kontakt</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
