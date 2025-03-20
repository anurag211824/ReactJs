/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from "react";

const ReducerComp = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };

      case "DECREMENT":
        return state.count > 0 ? { ...state, count: state.count - 1 } : state;

      case "RESET":
        return { ...state, count: 0 };

      case "INCBYTWO":
        return { ...state, count: state.count + 2 };
      case "DECBYTWO":
        return state.count > 0 ? { ...state, count: state.count - 2 } : state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6">{state.count}</h1>
      <div className=" max-w[800px] mx-auto flex  flex-wrap space-x-10">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          Reset
        </button>
        <button onClick={()=>{
          dispatch({type:'INCBYTWO'})
        }} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition">Increment 2</button>
       <button onClick={()=>{
          dispatch({type:'DECBYTWO'})
        }} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition">Decrement 2</button>
      
      
      
      </div>
    </div>
  );
};

export default ReducerComp;
