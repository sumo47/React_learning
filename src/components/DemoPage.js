import React, { useState, useMemo } from "react";
import { findPrime } from "../utility/helper";
import DemoPage2 from "./DemoPage2";

const DemoPage = () => {
  const [theme, setTheme] = useState(true);
  const [text, setText] = useState(0);

  const Prime = useMemo(() => findPrime(text), [text]);

  return (
    <div className="flex ">
      <div
        className={`"w-96 h-96 mt-9 border-solid border-black border-4 rounded-md" ${theme && "bg-red-200"
          }`}
      >
        <button
          className="bg-green-300 border border-solid rounded-sm p-1 m-2 hover:bg-blue-300"
          onClick={() => setTheme(!theme)}
        >
          toggle
        </button>

        <input
          type="number"
          className="border border-solid rounded-sm bg-gray-200"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>Prime number is : {Prime}</h1>
      </div>
      <DemoPage2 />
    </div>
  );
};

export default DemoPage;
