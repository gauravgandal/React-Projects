import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center font-bold text-red-700 bg-white text-5xl py-2 px-4">
        BG COLOR CHANGE APPLICATION IN REACTJS
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex shadow-xl flex-wrap bg-white gap-3 rounded-lg px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-white text-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-white text-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-6 py-2 bg rounded-full shadow-lg font-bold text-black text-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
