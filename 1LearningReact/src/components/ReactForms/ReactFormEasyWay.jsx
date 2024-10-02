import React, { useState } from "react";

const ReactFormEasyWay = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
     // Log user data to console (or handle as needed)
    
    // Reset the form after submission
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <br />
          <br />

          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <br />
          <br />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <br />
          <br />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <br />
          <br />

          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
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

export default ReactFormEasyWay;
