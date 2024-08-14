import React from "react";

export function MovieWatched(props) {
  const { movie, onDeleteWatched } = props;

  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>
            {isNaN(movie.imdbRating) ? "Brak danych" : movie.imdbRating}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>
            {isNaN(movie.runtime) ? "Brak danych" : `${movie.runtime} min`}
          </span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteWatched(movie)}>
          -
        </button>
      </div>
    </li>
  );
}
