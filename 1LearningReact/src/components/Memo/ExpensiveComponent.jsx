import { useMemo } from "react";
 // A function that performs an expensive calculation
const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let sumValue = 0;
    for (let i = 0; i < 100000000; i++) {
      sumValue += i;
    }
    return sumValue;
  };

  /*
    useMemo is used here to memoize(is a technique to optimize the result by caching the expensive calculation ) 
     the result of the `sum` function.
    - The function `sum()` is only executed once when the component mounts.
    - The empty dependency array `[]` ensures `sum()` is not recomputed on re-renders.
    - This prevents unnecessary recalculations, improving performance.
  */
  const total = useMemo(() => {
    return sum();
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center border border-gray-300 overflow-hidden">
      <p className="text-xl font-bold text-gray-800">Sum:</p>
      <p className="text-2xl text-blue-600 font-mono break-words">{total}</p>
    </div>
  );
};

export default ExpensiveComponent;
