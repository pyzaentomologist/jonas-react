import React, { useState } from "react";
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


export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => {
      const index = watched.findIndex((el) => el.imdbID === movie.imdbID);
      if (index !== -1) {
        return [...watched.slice(0, index), movie, ...watched.slice(index + 1)];
      }

      return [...watched, movie]
    });
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleDeleteWatched(movie) {
    setWatched((watched) => watched.filter((el) => el.imdbID !== movie.imdbID));
  }
  
  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        setIsLoading={setIsLoading}
        setError={setError}
        handleCloseMovie={handleCloseMovie}
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
