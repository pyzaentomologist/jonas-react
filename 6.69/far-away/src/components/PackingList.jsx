import React from "react";
import { PackingItem } from "./subcomponents/PackingItem";
import { initialItems } from "../data/initialItems";

export function PackingList() {
  return (
    <>
      <div className="list">
        Lista
        <ul>
          {initialItems.map((el) => (
            <PackingItem key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </>
  );
}
