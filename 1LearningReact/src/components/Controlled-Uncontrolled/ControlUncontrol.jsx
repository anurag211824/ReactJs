import React, { useState } from 'react'

const ControlUncontrol = () => {
  const [input, setInput] = useState("");

  // Handle submit for uncontrolled component
  const handleSubmitCustom = (event) => {
    event.preventDefault();
    const dataValue = document.getElementById('inputName').value; // Access value directly from DOM
    console.log(dataValue);
    document.getElementById('inputName').value="";
  }

  // Handle submit for controlled component
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input); // Logs the state value
    setInput("")
  }

  return (
    <>
      {/* Uncontrolled Component Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6 font-playwrite">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Uncontrolled Component</h1>
        <form onSubmit={handleSubmitCustom} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              id="inputName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Controlled Component Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6 font-playwrite">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Controlled Component</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
export default ControlUncontrol;
