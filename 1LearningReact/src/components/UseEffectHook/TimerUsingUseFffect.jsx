import { useEffect, useState } from "react";

const TimerUsingUseFffect = () => {
  const [date, SetDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      SetDate(updatedDate.toLocaleTimeString());
    }, 1000);
    console.log("Timer running");
  }, [date]);
  return (
    <>
      <div className="bg-blue-700 text-white font-semibold flex justify-center items-end">
        <p>{date}</p>
      </div>
    </>
  );
};

export default TimerUsingUseFffect;
