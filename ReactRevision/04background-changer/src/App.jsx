import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("black");
  const changeBgColor = (color) => {
    setBgColor(color);
  };
  const colors = [
  "red", 
  "yellow", 
  "black", 
  "blue", 
  "hotpink", 
  "green",
  "orange",
  "purple",
  "gray",
  "brown",
  "cyan",
  "magenta",
  "teal",
  "navy",
  "lime",
  "indigo",
  "violet",
  "gold",
  "silver"
];

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor }}>
      <div className="bg-white fixed bottom-12 left-20 right-20 p-2 flex flex-wrap gap-2 justify-center items-center">
        {colors.map((color, index) => {
          return (
            <button
              onClick={() => changeBgColor(color)}
              className="px-2 py-1 rounded-2xl text-white"
              style={{ backgroundColor: color }}
              key={index}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
