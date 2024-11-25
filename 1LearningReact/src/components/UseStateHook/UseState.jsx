import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState();

  const increment = () => {
    setCount(count + stepCount);
  };
  const decrement = () => {
    setCount(count - stepCount);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{count}</h1>
      <input
        type="number"
        placeholder="Enter the step count"
        onChange={(e) => setStepCount(Number(e.target.value))}
        className="w-64 p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     <div className="flex gap-4">
     <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={increment}
        disabled={count >= 100}
      >
        Increase
      </button>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={decrement}
        disabled={count <= 0}
      >
        Decrease
      </button>

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={()=>setCount(0)}
      >
        Reset
      </button>
     </div>
    </div>
  );
};

export default UseState;
