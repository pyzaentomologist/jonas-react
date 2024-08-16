import { useState, useEffect } from "react";

const KEY = "5ed6b1e6";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with internet connection");

        const data = await res.json();
        setMovies(data.Search);
        if (data.Response === "False") throw new Error("Movie not found");

        setError("");
      } catch (err) {
        if (err.name !== "AbortedError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return
    }

    fetchMovies();

    return function () {
      controller.abort();
    }
  }, [setIsLoading, setError, setMovies, query, callback]);

  return {movies, isLoading, error}
}
