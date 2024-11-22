import React, { useRef, useState } from "react";

const Useref1 = () => {
  const countRef = useRef(0); // Initialize properly
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    countRef.current += 1;
    console.log(countRef.current);

    setCounter(counter + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Count (useRef):{" "}
          <span className="text-teal-500">{countRef.current}</span>
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Counter (useState): {counter}
        </p>
        <button
          onClick={Increment}
          className="px-6 py-2 bg-teal-500 text-white rounded shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Useref1;
