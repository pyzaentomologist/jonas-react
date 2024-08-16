import React from "react";
import { Movie } from "./Movie";

export function MovieList(props) {
    const { movies, onSelectMovie } = props;
    return (
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    );
}