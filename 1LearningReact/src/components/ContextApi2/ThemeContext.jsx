import { createContext, useState } from "react";
import Form from "./Form";
const ThemeContext = () => {
  const [theme, setTheme] = useState("light");
  const ThemeContext = createContext(null);
  return (
    <ThemeContext.Provider value={theme}>
         <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
