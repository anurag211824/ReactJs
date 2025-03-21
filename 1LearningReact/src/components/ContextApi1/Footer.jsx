/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`p-4 ${
        theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-gray-100"
      }`}
    >
      <div className="container mx-auto text-center">
        &copy; 2024 Demo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
