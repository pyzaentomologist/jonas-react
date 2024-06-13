import React, { useState } from "react";
import { tempMovieData, tempWatchedData } from './data/data'
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Box } from "./components/Box";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { NumResults } from "./components/subcomponents/NumResults";
import { Summary } from "./components/Summary"

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <NumResults movies={movies.length} />
      </Navbar>
      <Layout>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Layout>
    </>
  );
}
