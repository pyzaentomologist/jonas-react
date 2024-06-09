import React from "react";
import { Person } from "./subcomponents/Person";

export function PersonList(props) {
    const { data, curPerson, onSelection } = props;
    return (
      <ul>
        {data.map((el, i) => (
          <Person
            {...el}
            key={i}
            curPerson={curPerson}
            onSelection={onSelection}
          />
        ))}
      </ul>
    );
}