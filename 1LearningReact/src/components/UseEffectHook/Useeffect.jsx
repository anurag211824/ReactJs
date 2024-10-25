import React, { useState } from "react";
import { useEffect } from "react";
const Useeffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count value:", count);
  }, [count]);
  return (
    <>
      <div>
        <p className="text-blue-600 bg-slate-950 inline-block">{count}</p>
        <br />
        <button
          className="text-white font-semibold bg-green-500 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Click to Increase
        </button>
      </div>
    </>
  );
};

export default Useeffect;
