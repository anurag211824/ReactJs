import React, { useState } from "react";

const LiftingSate = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisPlayComponent inputValue={inputValue} />
    </>
  );
};

export default LiftingSate;

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisPlayComponent = ({ inputValue }) => {
  return (
    <>
      <p>The Current Input Value is:{inputValue}</p>
    </>
  );
};
