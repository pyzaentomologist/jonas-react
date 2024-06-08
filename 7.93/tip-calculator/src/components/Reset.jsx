import React from "react";

export function Reset(props) {
  const { onReset } = props;
  return (
    <div>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}
