import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (specialAllowed) chars += "!@#$%&*";
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomNum);
    }
    setPassword(password);
  }, [length, numberAllowed, specialAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialAllowed]);

  return (
    <div className="h-screen bg-gray-100 p-5">
      <h1 className="text-3xl p-3 font-bold text-green-500">
        PassWorD GeneRaToR aPP
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="p-2 border-2 m-2 rounded-lg"
          readOnly
          value={password}
          placeholder="PaSSwOrD"
        />
        {/* copy to clipboard */}
        <button
          className="p-2 border-2 m-2 rounded-lg"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
        <button onClick={generatePassword}>Generate</button>
      </div>
      <div className="flex align-center justify-center p-2">
        <div className="flex flex-items">
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            id="length"
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer p-2"
          />
          <label htmlFor="length" className="p-2">
            Length: {length}
          </label>
        </div>

        <div className="flex flex-items">
          <input
            type="checkbox"
            defaultValue={numberAllowed}
            id="number"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer p-2"
          />
          <label htmlFor="number" className="p-2">
            Numbers
          </label>
        </div>

        <div className="flex flex-items">
          <input
            type="checkbox"
            defaultValue={specialAllowed}
            id="special"
            onChange={() => {
              setSpecialAllowed((prev) => !prev);
            }}
            className="cursor-pointer p-2"
          />
          <label htmlFor="special" className="p-2">
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
