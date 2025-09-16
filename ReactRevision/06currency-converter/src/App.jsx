import { useState } from "react";
import CurrencyInputBox from "./components/CurrencyInputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
 const swap = () => {
  const oldFrom = from;
  const oldTo = to;
  const oldAmount = amount;
  const oldConverted = convertedAmount;

  setFrom(oldTo);
  setTo(oldFrom);
  setAmount(oldConverted);
  setConvertedAmount(oldAmount);
};

  const data = useCurrencyInfo(from.toUpperCase());
  const currencyOptions = Object.keys(data)
  console.log(currencyOptions);
  


  const convert = () => {
    setConvertedAmount(amount * data[to.toUpperCase()]);
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative"
      style={{
        backgroundImage:
          'url("https://c7.alamy.com/comp/GDJPF4/abstract-finance-world-currency-background-GDJPF4.jpg")',
      }}
    >
      <div className="bg-black flex-col gap-5 opacity-90 max-w-[400px] w-full m-2 p-2 rounded-lg">
        <CurrencyInputBox
          currencyOptions={currencyOptions}
          onAmountChange={(amount) => setAmount(amount)}
          label={from}
          amount={amount}
          onCurrencyChange  = {(currency)=>setFrom(currency)}
        />

        <CurrencyInputBox
          currencyOptions={currencyOptions}
          label={to}
          amount={convertedAmount}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          onCurrencyChange  = {(currency)=>setTo(currency)}
        />

        <div className="flex gap-2">
          <button
            onClick={swap}
            className="bg-blue-500 w-full mt-2 rounded-lg py-1 text-white"
          >
            Swap
          </button>
          <button
            onClick={convert}
            className="bg-blue-500 w-full mt-2 rounded-lg py-1 text-white"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
