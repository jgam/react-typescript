import React, { Component, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Number from './components/Number';

const App: React.FC = () => {
  //originally
  //const App: React.FC<{number: number}> = ({number}) => {return <div>{number}</div>}
  interface IState{
    counter:number;
  }

  const [counter, setNumber] = useState(0);

  return (
    <div className="App">
      current Num is : {counter}
      <div>
        <button onClick={() => setNumber(counter + 1)}>increase</button>
        <button onClick={() => setNumber(counter - 1)}>decrease</button>
      </div>
    </div>
  );
}

export default App;
