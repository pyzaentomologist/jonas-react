import React from "react";
import {average} from '../utils/average'
export function Summary(props) {
  const { watched } = props;

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(
    watched.map((movie) => movie.runtime).filter((runtime) => !isNaN(runtime))
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {isNaN(avgImdbRating.toFixed(1))
              ? "Brak danych"
              : avgImdbRating.toFixed(1)}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>
            {avgRuntime.toFixed()} min
          </span>
        </p>
      </div>
    </div>
  );
}