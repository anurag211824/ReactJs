// src/App.js
import React from "react";
import ProgressBar from "./components/ProgressBar";
import TemperatureIndicator from "./components/TemperatureIndicator";

function App() {
  return (
    <>
      <div className="App" style={{ padding: "20px" }}>
        <h1>Progress Bar with Conditional Styling</h1>
        <h3>Task Completion: 40%</h3>
        <ProgressBar percentage={40} /> {/* Red */}
        <h3>Task Completion: 60%</h3>
        <ProgressBar percentage={60} /> {/* Yellow */}
        <h3>Task Completion: 85%</h3>
        <ProgressBar percentage={85} /> {/* Green */}
      </div>
      <div className="App" style={{ padding: '20px' }}>
      <h1>Temperature Indicator</h1>
      
      <TemperatureIndicator temperature={10} /> {/* Blue */}
      <TemperatureIndicator temperature={20} /> {/* Orange */}
      <TemperatureIndicator temperature={35} /> {/* Red */}
    </div>
    </>
  );
}

export default App;
