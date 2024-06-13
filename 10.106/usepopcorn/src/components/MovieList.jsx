import React from "react";
import { Movie } from "./Movie";

export function MovieList(props) {
    const { movies } = props;
    return (
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={crypto.randomUUID()} />
        ))}
      </ul>
    );
}