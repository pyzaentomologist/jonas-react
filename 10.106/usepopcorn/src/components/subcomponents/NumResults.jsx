import React from "react";

export function NumResults(props) {
    const { movies } = props;
    return (
      <p className="num-results">
        Found <strong>{movies}</strong> results
      </p>
    );
}