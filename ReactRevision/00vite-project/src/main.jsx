import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// const reactElement1 = (
//   <a href="https://google.com">visit google</a>
// )

// const reactElement2 = React.createElement('a',{href:"https://google.com",target:"_blank"},"click me to visit google")

createRoot(document.getElementById("root")).render(<App />);
