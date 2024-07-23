"use client";

import { useState } from "react";

type CounterType = {
  count: number;
};

export default function Counter({ count }: CounterType) {
  const [initCount, setInitCount] = useState(count);

  return (
    <>
      <h3>{initCount}</h3>
      <button
        onClick={() => {
          setInitCount(initCount + 1);
        }}
      >
        Add
      </button>
      <br />
      <button
        onClick={() => {
          if (initCount === 0) {
            return
          }  
          setInitCount(initCount - 1);
        }}
      >
        minus
      </button>
    </>
  );
}
