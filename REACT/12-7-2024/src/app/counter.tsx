"use client";

import { useState } from "react";

type CounterType = {
  count: number;
};

export default function Counter({ count }: CounterType) {
  const [initCount, setInitCount] = useState(count);

  return (
    <>
      <div className="main">
        <input
          className="input"
          type="text"
          id="input"
          placeholder="Enter only number..."
          value="1"
        />
        <div className="buttons-div">
          <button>
            <span className="text">Add</span>
          </button>

          <button>
            <span className="text">Minus</span>
          </button>

          <button>
            <span className="text">Clear</span>
          </button>
        </div>
        <h1 id="number"></h1>
        <h1 id="error"></h1>
      </div>
    </>
  );
}
