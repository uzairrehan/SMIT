import { useState } from "react";

type NumberType = {
  num: number;
};

export default function Counter({ num }: NumberType) {
  const [initNum, setInitNum] = useState<number>(num);
  const [numToBe,setNumToBe]= useState(num)  
  return (
    <>
      <h1>{initNum}</h1>
        <input type="text" />
        


      <button onClick={() => {setInitNum(initNum + 1);}}>plus</button>
      <button onClick={() => {setInitNum(initNum - 1); }}>minus</button>
    </>
  );
}
