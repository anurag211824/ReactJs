import React from "react";

function CurrencyInputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  inputRef
}) {
  return (
    <div className="w-full bg-gray-800 text-white p-1 rounded-lg mb-2">
      <div className="flex justify-between items-center mb-3">
        <label htmlFor="">{label}</label>
        <span>Currency Type</span>
      </div>
      <div className="flex gap-2">
        <input
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className=" border-1 focus:outline-none  text-white flex-1 rounded-lg"
          type="text"
          ref={inputRef}
        />
        <select
          value={label}
          className="text-white border-1 focus:outline-none rounded-lg"
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency, index) => {
            return (
              <option key={index} className="text-black" value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyInputBox;
