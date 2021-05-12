import React from "react";
import '../App.css';
const Links = ({items}) => {

  const division = Math.round(items.length / 2);
  const leftItems = items.slice(0, division);
  const rightItems = items.slice(division, items.length);

  return (
    <div className="footer-links">
      <ul className="links-left">
        {leftItems.map((navItem, index) => (
          <li key={index} className="links__item">
            <a href="/">{navItem}</a>
          </li>
        ))}
      </ul>

      <ul className="links-right">
        {rightItems.map((navItem, index) => (
          <li key={index} className="links__item">
            <a href="/">{navItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
