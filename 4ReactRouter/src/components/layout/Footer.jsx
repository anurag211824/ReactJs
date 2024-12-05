import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="flex justify-between items-center">
        <p className="text-sm">© 2024 My App. All rights reserved.</p>
        <ul className="flex space-x-6">
          {/* Footer Navigation Links */}
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold' : 'text-white'
              }
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold' : 'text-white'
              }
            >
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold' : 'text-white'
              }
            >
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
