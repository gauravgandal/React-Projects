import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    if (uppercaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, uppercaseAllowed, lowercaseAllowed]);

  const copyPassword = () => {
    passwordRef.current?.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, uppercaseAllowed, lowercaseAllowed]);

  const getPasswordStrength = () => {
    if (length < 8) return "Weak";
    if (length < 12) return "Medium";
    return "Strong";
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-center text-green-500 font-bold tracking-wide text-4xl mb-6">
        PASSWORD GENERATOR USING REACTJS
      </h1>
      <img
        src="https://geekflare.com/wp-content/uploads/2022/09/Random-Password-Generator.png"
        className="h-40 w-40 rounded-full mb-6 border-4 border-green-500"
        alt="Password Generator"
      />
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full mx-auto text-white">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="w-full border font-bold border-gray-600 bg-gray-700 p-2 rounded-l-md focus:outline-none focus:border-green-500 text-green-400"
            placeholder="Generated Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-md ml-2 focus:outline-none"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label className="text-sm font-bold block mb-1">Password Strength: {getPasswordStrength()}</label>
        </div>
        <div className="mb-4">
          <label className="text-sm font-bold block mb-1">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={24}
            step="1"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="block w-full mt-1 appearance-none h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-md overflow-hidden focus:outline-none focus:bg-gradient-to-r focus:from-yellow-400 focus:to-red-500"
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2 rounded focus:outline-none"
            />
            <label htmlFor="numbers" className="text-sm font-bold mr-4">
              Include Numbers (0-9)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="characters"
              checked={characterAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
              className="mr-2 rounded focus:outline-none"
            />
            <label htmlFor="characters" className="text-sm font-bold mr-4">
              Include Special Characters
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="uppercase"
              checked={uppercaseAllowed}
              onChange={(e) => setUppercaseAllowed(e.target.checked)}
              className="mr-2 rounded focus:outline-none"
            />
            <label htmlFor="uppercase" className="text-sm font-bold mr-4">
              Include Uppercase Letters
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lowercase"
              checked={lowercaseAllowed}
              onChange={(e) => setLowercaseAllowed(e.target.checked)}
              className="mr-2 rounded focus:outline-none"
            />
            <label htmlFor="lowercase" className="text-sm font-bold">
              Include Lowercase Letters
            </label>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mt-4 w-full focus:outline-none"
          onClick={passwordGenerator}
        >
          Regenerate Password
        </button>
      </div>
    </div>
  );
}

export default App;
