import React, {useState, useEffect } from "react";
import { fetchMovie } from "../api/fetcher";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import {StarRating} from "./StarRating"

export function MovieDetails(props) {
  const { selectedId, onCloseMovie, onAddWatched, watched } = props;
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState("");

  const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movieData;

  useEffect(() => {
    fetchMovie(setIsLoading, setError, setMovieData, selectedId);

  }, [setIsLoading, setError, setMovieData, selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = title;
    return function () {
      document.title = "usePopcorn";
    } 
  }, [title]);

  useEffect(() => {
    function callback (e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener('keydown', callback
  )}; 
  }, [onCloseMovie]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    
    if (!userRating) {
      alert("Musisz ocenić film, zanim dodasz go do listy obejrzanych.");
      return;
    }
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  const watchedFilm = watched.find(el => el.imdbID === selectedId);
  return (
    <>
      <div className="details">
        {isLoading && <Loader />}
        {!isLoading && !error && movieData && (
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>
                &larr;
              </button>
              <img src={poster} alt={`Poster of ${title}`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐</span>
                  {imdbRating} IMDb rating
                </p>
              </div>
            </header>
            <section>
              <div className="rating">
                {!watchedFilm ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to watched list
                    </button>
                  </>
                ) : (
                  <p style={{ textAlign: "center" }}>
                    Oceniłeś już ten film na ocenę: {watchedFilm.userRating || 0}
                  </p>
                )}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </>
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    </>
  );
}
