import React, { useRef } from "react";

// MemoCount is a functional component that displays the number of times it has rendered.
const MemoCount = () => {
  // useRef is used to keep track of the render count without causing re-renders.
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <p className="text-lg font-semibold">
        Nothing Changed here but I have rendered:
        <span className="text-yellow-400 font-bold ml-2">
          {renderCount.current++} times
        </span>
      </p>
    </div>
  );
};

// React.memo is a higher-order component that memoizes the MemoCount component.
// It prevents unnecessary re-renders by comparing the previous and next props.
// If the props haven't changed, React skips rendering this component.
// This optimization is beneficial when the component renders the same output given the same props.
export default React.memo(MemoCount);
