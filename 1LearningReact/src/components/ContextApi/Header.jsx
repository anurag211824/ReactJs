import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`p-4 ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Context API Demo</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
