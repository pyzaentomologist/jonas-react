import React, {useState} from "react";
import { Step } from "./components/Step";
import { StepMessage } from "./components/StepMessage";
import { Button } from "./components/subcomponents/Button";

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
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                onClick={() => alert(`Learn how ${messages[step - 1]}`)}
                bgColor="#e7e7e7e7"
                color="#333"
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button onClick={handleAddStep} bgColor="#7950f2" color="#fff">
              <span>👈</span> Previous
            </Button>
            <Button onClick={handleReduceSteps} bgColor="#7950f2" color="#fff">
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
