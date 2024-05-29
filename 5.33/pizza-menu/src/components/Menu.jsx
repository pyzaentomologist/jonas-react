import React from "react";
import { Pizza } from "./subcomponents/Pizza";
import { pizzaData } from "../data/data";

export function Menu() {
  const pizzas = pizzaData;
  const pizzasNums = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasNums > 0 ? (
        <>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur quidem suscipit ipsum corrupti nobis ipsa, nam at illo quam inventore, eveniet vero culpa nihil atque. Blanditiis nam fuga adipisci?</p>
          <ul className="pizzas">
            {pizzas.map((pizza, i) => {
              return <Pizza {...pizza} key={i} />;
            })}
          </ul>
        </>
      ) : (
        <p>Pracujemy nad menu, odwiedź nas później</p>
      )}
    </main>
  );
}
