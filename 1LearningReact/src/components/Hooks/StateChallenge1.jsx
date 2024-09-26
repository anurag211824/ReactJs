import React from "react";
import { useState } from "react";

const StateChallenge1 = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 25 },
    { name: "Emily", age: 30 },
    { name: "Michael", age: 22 },
    { name: "Sophia", age: 28 },
    { name: "David", age: 35 },
  ]);
  const [newUser, setNewUser] = useState("");
  const [newAge, setNewAge] = useState("");

  const addUser = (user, age) => {
    setUsers([...users, { name: user, age: age }]);
  };

  const userCount = users.length;
  const averageAge =
    users.reduce((accum, user) => accum + Number(user.age), 0) / userCount;

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Users List
      </h1>
      <ul className="list-disc list-inside mx-auto max-w-md bg-gray-50 shadow-lg p-4 rounded-lg">
        {users.map((user, index) => (
          <li
            key={index}
            className="text-lg text-gray-700 mb-2 flex justify-between items-center"
          >
            <span className="font-semibold text-blue-500">Name:</span>{" "}
            {user.name}
            <span className="ml-4 font-semibold text-blue-500">Age:</span>{" "}
            {user.age}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <div className="text-lg font-semibold">
          <span>User Count:</span> {userCount}
        </div>
        <div className="text-lg font-semibold">
          <span>Average Age:</span> {averageAge.toFixed(2)}
        </div>
      </div>
      <div className="mt-4 text-center">
        <input
          type="text"
          placeholder="Enter name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Enter age"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={() => addUser(newUser, newAge)}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>
    </>
  );
};

export default StateChallenge1;
