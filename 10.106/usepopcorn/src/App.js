import React, { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Box } from "./components/Box";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { NumResults } from "./components/subcomponents/NumResults";
import { Summary } from "./components/Summary"
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { MovieDetails } from "./components/MovieDetails";
import { useMovies } from "./api/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [selectedId, setSelectedId] = useState(null);

  const handleCloseMovie = useCallback(function () {
    setSelectedId(null);
  }, []);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);


  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(movie) {
    setWatched((watched) => watched.filter((el) => el.imdbID !== movie.imdbID));
  }
  
  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
      >
        <NumResults movies={movies && movies.length} />
      </Navbar>
      <Layout>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Layout>
    </>
  );
}
