import React from "react";

export function Order(props) {
  const { close } = props;
  return (
    <div className="order">
      <p>
        Jesteśmy otwarci do {close}:00. Odwiedź nas lub złóż zamówienie
        onlice!
      </p>
      <button className="btn">Zamów</button>
    </div>
  )
}
