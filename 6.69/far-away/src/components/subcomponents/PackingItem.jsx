import React from "react";

export function PackingItem(props) {
  const { id, description, quantity, packed, handleDelete, changePacked } =
    props;
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={packed !== undefined ? packed : false}
          onChange={() => changePacked(id)}
        />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {description} {quantity}x
        </span>
        <button onClick={() => handleDelete(id)}>❌</button>
      </li>
    </>
  );
}
