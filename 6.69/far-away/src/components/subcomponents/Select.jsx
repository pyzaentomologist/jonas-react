import React from "react";

export function Select(props) {
  const { handleSort, sortBy } = props;
  return (
    <>
      <select onChange={(e) => { handleSort(e.target.value);}} value={sortBy}>
        <option value="default">Sortuj domyślnie</option>
        <option value="description">Sortuj po opisie</option>
        <option value="package-status">Sortuj po stanie spakowania</option>
      </select>
    </>
  );
}
