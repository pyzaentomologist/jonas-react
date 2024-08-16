import React from "react";

export function Select(props) {
  const { currencies, onSelect, value, isLoading } = props;
  
  return (
    <select
      onChange={onSelect}
      value={value}
      disabled={isLoading}
    >
      {Object.keys(currencies.rates).map((el, key) => (
        <option key={key} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}