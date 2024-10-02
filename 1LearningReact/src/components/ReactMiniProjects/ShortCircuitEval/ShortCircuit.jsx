import React, { useState } from 'react';

const ShortCircuit = () => {
  const [isLoggedIn, SetisLoggedIn] = useState(true);
  const [user, Setuser] = useState("");

  return (
    <>
      <section className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
        <div className='bg-white p-6 rounded shadow-md w-full max-w-md'>
          <h1 className='text-center text-2xl font-bold mb-4'>
            Welcome to Short-Circuit Evaluation
          </h1>
          <p className='text-center text-gray-700 mb-2'>
            {isLoggedIn && <span className='text-green-600 font-semibold'>You are Logged In</span>}
          </p>
          <p className='text-center text-gray-700 mb-4'>
            {user ? `Hello, ${user}` : "Set User"}
          </p>
        </div>

        <div className='flex gap-4 mt-6'>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
            onClick={() => SetisLoggedIn(!isLoggedIn)}
          >
            Toggle Login State
          </button>
          <button
            className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition'
            onClick={() => Setuser("Anurag Kumar")}
          >
            Set User
          </button>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
            onClick={() => Setuser("")}
          >
            Clear User
          </button>
        </div>
      </section>
    </>
  );
};

export default ShortCircuit;
