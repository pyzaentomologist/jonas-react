import React, { useCallback, useRef } from "react";
import { Logo } from './subcomponents/Logo';
import { useKey } from "../hooks/useKey";

export function Navbar(props) {
  const {
    children,
    query,
    setQuery,
  } = props;

  const inputEl = useRef(null);

  const handleCloseMovie = useCallback(() => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  }, [setQuery]);

  useKey("Enter", handleCloseMovie)
  
  return (
    <nav className="nav-bar">
      <Logo />
      <input
        ref={inputEl}
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {children}
    </nav>
  );
}
