import React from "react";
import { MovieWatched } from "./MovieWatched";

export function WatchedList(props) {
  const { watched } = props;
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <MovieWatched movie={movie} key={crypto.randomUUID()} />
        ))}
      </ul>
    </>
  )
}