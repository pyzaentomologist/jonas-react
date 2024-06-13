import React, { useState } from "react";
import { Input } from './subcomponents/Input'
import { Logo } from './subcomponents/Logo'

export function Navbar(props) {
  const { children } = props;
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      <Input query={query} setQuery={setQuery} />
      { children }
    </nav>
  );
}
