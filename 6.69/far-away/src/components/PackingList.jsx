import React, {useState} from "react";
import { PackingItem } from "./subcomponents/PackingItem";
import { Select } from "./subcomponents/Select";

export function PackingList(props) {
  const {
    newItems,
    handleDelete,
    changePacked,
    handleClear,
  } = props;
  
  const [sortBy, setSortBy] = useState("default");

  let sortedItems;

  if (sortBy === "description") {
    sortedItems = newItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "package-status") {
    sortedItems = newItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = newItems
      .slice()
      .sort((a, b) => a.id - b.id);
  }

  function handleSort(value) {
    setSortBy(value);
  }
  
  return (
    <>
      <div className="list">
        Lista
        <ul>
          {sortedItems.map((el) => (
            <PackingItem
              key={el.id}
              {...el}
              handleDelete={handleDelete}
              changePacked={changePacked}
            />
          ))}
        </ul>
        <Select handleSort={handleSort} sortBy={sortBy} />
        <button onClick={() => handleClear()}>Wyczyść listę</button>
      </div>
    </>
  );
}
