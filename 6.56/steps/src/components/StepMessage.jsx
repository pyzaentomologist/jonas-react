import React from "react";

export function StepMessage(props) {
  const { step, children } = props;
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}
