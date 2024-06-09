import React from "react";

export function Input(props) {
  const {
    children,
    disabled = false,
    onChange = null,
    value,
    required = false,
  } = props;
  return (
    <>
      <label>{children}</label>
      <input
        type="text"
        disabled={disabled}
        onChange={onChange}
        value={value}
        required={required}
      />
    </>
  );
}