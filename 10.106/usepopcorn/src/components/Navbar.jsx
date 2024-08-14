import React from "react";
import { Logo } from './subcomponents/Logo';
import { fetchMovies } from "../api/fetcher";

export function Navbar(props) {
  const {
    children,
    query,
    setQuery,
    setIsLoading,
    setError,
    setMovies,
    handleCloseMovie,
  } = props;
  
  function getMovies(query) {
    const controller = new AbortController();
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies(setIsLoading, setError, setMovies, query, controller);
    handleCloseMovie();
    return function () {
      controller.abort();
    };
  }

  return (
    <nav className="nav-bar">
      <Logo />
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          getMovies(e.target.value);
        }}
      />
      {children}
    </nav>
  );
}
