import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <ul className="list">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "blue",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "none" : "underline",
            };
          }}
        >
          <li>Home</li>
        </NavLink>
        <li>
          <a href="#idea" className="link">
            Your work
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
