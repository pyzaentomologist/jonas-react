import React, { useState } from "react";
import { FlashCard } from "./subcomponents/FlashCard";
import { questions } from "../data/data";

export function FlashCards() {
  const [idSelected, setIdSelected] = useState(null);
  function handleSelect(id) {
    setIdSelected(id !== idSelected ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((el) => (
        <FlashCard
          {...el}
          selected={idSelected}
          key={el.id}
          onClick={handleSelect}
        />
      ))}
    </div>
  );
}
