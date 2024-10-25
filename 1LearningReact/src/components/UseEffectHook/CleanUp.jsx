import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <p className='flex bg-green-500 justify-center items-center text-white'>Current Timer:{count}</p>
    </>
  );
};

export default CleanUp;
