/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ( {children} ) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
