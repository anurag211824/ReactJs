import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`p-8 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Demo</h2>
        <p>
          This is a simple React website to demonstrate the Context API and
          Tailwind CSS integration.
        </p>
      </div>
    </main>
  );
};

export default MainContent;
