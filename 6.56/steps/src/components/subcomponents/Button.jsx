import React from "react";

export function Button(props) {
    const { bgColor, color, onClick, children } = props;
    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: color }}
      >
        {children}
      </button>
    );
}