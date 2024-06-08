import React, { useState } from "react";

export function Form(props) {
  const { handleNewItem } = props;
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const item = { description, quantity, packed: false, id: Date.now() };
    handleNewItem(item);
    setDescription("");
    setQuantity(1);
  }

  function handleInput(e) {
    setDescription(e.target.value);
  }

  function handleSelect(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Czego potrzebujesz na wyprawę 😍</h3>
        <select value={quantity} onChange={handleSelect}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleInput}
        />
        <button>Dodaj</button>
      </form>
    </>
  );
}
