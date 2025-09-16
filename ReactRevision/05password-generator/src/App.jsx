import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setChharAllowed] = useState(false);
  const [password, setPassword] = useState("Anurag");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);

      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword, passwordGenerator]);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-[500px] w-full bg-gray-900 p-3">
        <h1 className="text-center font-semibold text-2xl mb-2">
          Password Generator
        </h1>
        <div className="flex mb-5 w-full">
          <input
            value={password}
            ref={passwordRef}
            className="flex-1 border border-gray-300 rounded-l-md p-1 focus:outline-none"
            type="text"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white rounded-r-md p-1"
          >
            copy
          </button>
        </div>
        <div className="flex flex-col sm:flex-row  gap-3 w-full">
          <div className="flex items-center gap-2 w-[50%]">
            <input
              type="range"
              max={100}
              min={0}
              onChange={(e) => setLength(e.target.value)}
            />{" "}
            <span>Length:{length}</span>
          </div>
          <div className="flex items-center gap-2 w-[50%]">
            <input
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              type="checkbox"
            />{" "}
            <span>Numbers</span>
            <input
              defaultChecked={charAllowed}
              onChange={() => setChharAllowed((prev) => !prev)}
              type="checkbox"
            />{" "}
            <span>Characters</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
