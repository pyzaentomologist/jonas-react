import React from "react";
import { Order } from "./subcomponents/Order";

export function Footer() {
  const hour = new Date().getHours();
  const hours = {
    open: 10,
    close: 18,
  };
  const isOpen = (hour >= hours.open) & (hour <= hours.close);

  return (
    <footer className="footer">
      <p>{new Date().toLocaleDateString()}, </p>
      {isOpen ? (
        <Order { ...hours } />
      ) : (
        <p>
          Zapraszamy jutro w godzinach {hours.open}:00 - {hours.close}:00
        </p>
      )}
    </footer>
  );
}
