import React from "react";

export function Layout(props) {
  const { children } = props;
  return (
    <main className="main">
      { children }      
    </main>
  );
}
