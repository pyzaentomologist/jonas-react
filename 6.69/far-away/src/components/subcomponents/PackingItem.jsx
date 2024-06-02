import React from "react";

export function PackingItem(props) {
  const { id, description, quantity, packed } = props;
  return (
    <>
      <li>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          <strong>{id}.</strong>
          {description} {quantity}x
        </span>
        <button>❌</button>
      </li>
    </>
  );
}
