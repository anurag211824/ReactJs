/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
// Import NavLink for navigation

const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "yellow",
    };
  };
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-lg font-bold">My App</h1>
        <ul className="flex space-x-4">
          {/* Navigation Links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return {
                  color: isActive ? "blue" : "red",
                };
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={getNavLinkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
