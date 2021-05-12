import React from "react";
import '../App.css';

// import NavItem from "../NavItem/NavItem";

const Navigation = ({ items }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((navItem, index) => (
          <li key={index} className="nav__item">
            <a href="/" className="nav__link">
              {navItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
