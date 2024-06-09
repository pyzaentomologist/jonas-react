import React from "react";

export function Button(props) {
  const { children, onHandleClick = null } = props
  return (
    <button className="button" onClick={onHandleClick}>
      {children}
    </button>
  );
}