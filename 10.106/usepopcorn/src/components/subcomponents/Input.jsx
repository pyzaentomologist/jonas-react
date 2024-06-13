import React from "react";

export function Input(props) {
    const { setQuery, query } = props;
    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
}