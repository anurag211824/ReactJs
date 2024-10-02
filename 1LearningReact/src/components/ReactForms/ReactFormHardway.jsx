import React from 'react';
import { useState } from 'react';

export const ReactFormHardway = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      mobile,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setMobile("");
    console.log(formData);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          /><br /><br />

          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          /><br /><br />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          /><br /><br />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          /><br /><br />

          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          /><br /><br />

          <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
            Submit
          </button>
        </form>

        <p className=" flex flex-wrap gap:5 mt-6 text-gray-700">
          <span className="font-bold">First Name: {firstName}</span><br />
          <span className="font-bold"> Last Name:{lastName}</span> <br />
          <span className="font-bold"> Email:{email}</span> <br />
          <span className="font-bold"> Password:{password}</span> <br />
          <span className="font-bold"> Mobile:{mobile}</span> <br />
        </p>
      </div>
    </>
  ); 
};
