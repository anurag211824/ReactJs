import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const UseMemoParent = () => {
  const [count, setCount] = useState(0);
  /*
    This component demonstrates how `useMemo` in ExpensiveComponent prevents unnecessary recomputation.
    - The `count` state updates when the button is clicked, causing UseMemoParent to re-render.
    - However, `ExpensiveComponent` will not recompute the sum because of `useMemo`.
    - This optimizes performance by avoiding expensive recalculations on each parent re-render.
  */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <ExpensiveComponent />
        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Re-render Parent
        </button>
        <p className="mt-2 text-gray-700 font-medium">Parent re-renders: {count}</p>
      </div>
    </div>
  );
};

export default UseMemoParent;
