import React from "react";

export function Button(props) {
  const { curOpen, onOpen } = props;
    return (
      <button className="btn-toggle" onClick={() => onOpen((open) => !open)}>
        {curOpen ? "–" : "+"}
      </button>
    );
}