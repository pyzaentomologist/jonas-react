import React from "react";

export function Stats(props) {
  const { items } = props;
  
  if (!items.length)
    return (
      <p className="stats">
        <em>Dodaj coś do listy pakowania</em>
      </p>
    )
  
  const itemsNumbers = items.length;  
  const intemsPackedNumbers = items.filter((item) => item.packed && item).length;
  const itemsPackedPercentage = Math.round((intemsPackedNumbers / itemsNumbers) * 100);

  return (
    <>
      <footer className="stats">
        <em>
          {itemsPackedPercentage === 100 ? 'Spakowałeś się, jesteś gotowy do pordóży ✈' :
            `Masz ${itemsNumbers} rzeczy na liscie.
            ${intemsPackedNumbers > 0
              ? `Spakowałeś już ${intemsPackedNumbers} rzeczy (${itemsPackedPercentage}%)`
            : null}`}
        </em>
      </footer>
    </>
  );
}
