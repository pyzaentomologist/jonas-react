import React, {useState} from 'react';
import './App.css';

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  
  function handleAddSteps() {
    setSteps((steps)=> steps+1)
  }
  function handleOddSteps() {
    steps > 1 && setSteps((steps) => steps - 1);
  }
  function handleAddCount() {
    setCount((count) => count + 1);
  }
  function handleOddCount() {
    setCount((count) => count - 1);
  }
  function handleReset() {
    setSteps(1);
    setCount(0);
  }
  
  const numberOfDays = steps * count;
  const date = new Date();
  date.setDate(date.getDate() + numberOfDays);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function dayDescribe() {
    if (numberOfDays === 0) {
      return "Dziś jest ";
    } else if (numberOfDays === 1) {
      return "Jutro będzie ";
    } else if (numberOfDays === -1) {
      return "Wczorajsza data: ";
    } else if (numberOfDays > 0) {
      return `Za ${numberOfDays} dni będzie `;
    } else {
      return `Data sprzed ${numberOfDays * -1} dni: `;
    }
  }

  return (
    <div className="App">
      <div className="steps">
        <button onClick={handleOddSteps}>-</button>
        <span>Step: {steps}</span>
        <button onClick={handleAddSteps}>+</button>
      </div>
      <div className="count">
        <button onClick={handleOddCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        <span>{dayDescribe()}</span>
        {date.toLocaleDateString("pl-PL", options)}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
