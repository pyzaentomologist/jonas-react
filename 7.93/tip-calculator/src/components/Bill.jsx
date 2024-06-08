import React from "react";

export function Bill(props) {
  const { theBill, onSetTheBill, children } = props;
  function handleBill(e) {
    onSetTheBill(Number(e.target.value));
  }
    return (
      <div>
        <label>{ children}</label>
        <input type="number" min="0" value={theBill} onChange={handleBill} />
      </div>
    );
}