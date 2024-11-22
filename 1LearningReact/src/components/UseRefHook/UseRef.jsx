import React, { useRef } from "react";

const UseRef = () => {
  const email = useRef(null);
  const phone = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(phone.current.value);
  };
  return (
    <>
      <div className="bg-teal-100 min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Contact Us</h2>

          <input
            type="text"
            placeholder="Email"
            ref={email}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Phone"
            ref={phone}
            className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            className="bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
