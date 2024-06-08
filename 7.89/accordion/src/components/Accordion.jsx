import React, { useState } from "react";
import { faqs } from "../data/data";
import { AccordionItem } from "./subcomponents/AccordionItem";

export function Accordion() {
  const [curOpen, setCurOpen] = useState(0);
  return (
    <div className="accordion">
      {faqs.map((el, i) => {
        const elId = i + 1
        return (
          <AccordionItem
            id={elId}
            title={el.title}
            key={i}
            onOpen={setCurOpen}
            curOpen={curOpen}
          >
            {el.text}
          </AccordionItem>
        );
      })}
    </div>
  )
}