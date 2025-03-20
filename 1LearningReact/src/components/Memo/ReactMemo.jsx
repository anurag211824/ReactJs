/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MemoCount from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Increment
      </button>
      <div className="mt-6">
        <MemoCount />
      </div>
    </div>
  );
};

export default ReactMemo;
