import React, {useState} from "react";
import { Step } from "./components/Step";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleAddStep() {
    step > 1 && setStep((s)=>s - 1)
  }
  function handleReduceSteps() {
    step < messages.length && setStep((s) => s + 1);
  }

  function handleOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((el, i) => {
              const id = i + 1;
              const isActive = id <= step;
              return <Step step={id} isActive={isActive} key={i} />;
            })}
          </div>
          <p className="message">
            {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handleAddStep}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleReduceSteps}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
