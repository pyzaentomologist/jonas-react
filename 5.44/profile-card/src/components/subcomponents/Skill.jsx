import React from "react";

export function Skill(props) {
  const { name, bgc, level} = props;
  return (
    <li className="skill" style={{ backgroundColor: bgc }}>
      <span>{name}</span> <span role="img">{
        ((level === "advanced" && "\ud83d\udcaa") ||
        (level === "intermediate" && "\ud83d\udc4d") ||
        (level === "beginner" && "\ud83d\udc76")) || "\ud83d\udc53"
      }</span>
    </li>
  );
}
