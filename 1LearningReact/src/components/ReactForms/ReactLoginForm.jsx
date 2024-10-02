import React, { useState } from "react";

const ReactLoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   const userData={
    username:user.username,
    password:user.password,
   }
   console.log(userData);
   
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login Form
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            username:
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
            autoComplete="off"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <br />
          <br />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            password:
          </label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
           <br />
           <br />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactLoginForm;
