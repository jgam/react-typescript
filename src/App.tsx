import React, { Component, useState } from "react";
import { createGlobalStyle } from "styled-components";

const App: React.FC = () => {
  interface IState{
    counter:number;
  }

  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      current Num is : {number}
      <div>
        <button onClick={() => setNumber(number + 1)}>increase</button>
        <button onClick={() => setNumber(number - 1)}>decrease</button>
      </div>
    </div>
  );
}

export default App;
