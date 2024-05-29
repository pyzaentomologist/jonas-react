import React from "react";

export function Pizza(props) {
  const { photoName, name, ingredients, price, soldOut } = props;
  return (
    <li className={`pizza${soldOut ? " sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
