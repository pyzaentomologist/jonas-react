import React from "react";

export function ErrorMessage(props) {
  const { message } = props;
  return <p className="error">{message}</p>;
}
