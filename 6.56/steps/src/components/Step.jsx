import React from "react";

export function Step(props) {
  const { step, isActive } = props;
  return <div className={isActive === true ? "active" : ""}>{step}</div>;
}