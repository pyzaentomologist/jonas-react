import React from "react";

export function Select(props) {
  const { children, name, onChange, value } = props;
  return (
    <>
      <label>{children}</label>
      <select onChange={onChange} value={value}>
        <option value="you">Ty</option>
        <option value={name}>{name}</option>
      </select>
    </>
  );
}
