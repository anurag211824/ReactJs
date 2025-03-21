/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

const UseReducerForm = () => {
  const user = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGENAME":
        return { ...state, name: action.payload };
      case "CHANGEMAIL":
        return { ...state, email: action.payload };
      case "CHANGEPHONE":
        return { ...state, phone: action.payload };
      case "CHANGEPASSWORD":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", state);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={state.name}
          onChange={(e) => dispatch({ type: "CHANGENAME", payload: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={(e) => dispatch({ type: "CHANGEMAIL", payload: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="phone"
          placeholder="Enter your phone"
          value={state.phone}
          onChange={(e) => dispatch({ type: "CHANGEPHONE", payload: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={state.password}
          onChange={(e) => dispatch({ type: "CHANGEPASSWORD", payload: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Register
        </button>
      </form>

      {/* Live Preview */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Live Preview:</h3>
        <p><span className="font-bold">Name:</span> {state.name}</p>
        <p><span className="font-bold">Email:</span> {state.email}</p>
        <p><span className="font-bold">Phone:</span> {state.phone}</p>
      </div>
    </div>
  );
};

export default UseReducerForm;
