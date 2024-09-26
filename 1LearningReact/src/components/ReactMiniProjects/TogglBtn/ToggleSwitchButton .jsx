import React, { useState } from "react";

const ToggleSwitchButton = () => {
  const [isToggle, setToggle] = useState(false);
  const [toggleTxt, setToggleTxt] = useState("On");

  const handleToggle = () => {
    setToggle(!isToggle);
    setToggleTxt(isToggle ? "On" : "Off");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className={`text-white text-xl px-10 py-4 rounded-lg ${
            isToggle ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={handleToggle}
        >
          {toggleTxt}
        </button>
      </div>
    </>
  );
};

export default ToggleSwitchButton;
