import React from "react";

export function Select(props) {
  const { tip, onSetTip, children } = props;
  function handleTip(e) {
    onSetTip(Number(e.target.value));
  }
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={handleTip}>
        <option value="0">0</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}
