import React from "react";

export function AccordionItem(props) {
  const { id, title, children, curOpen, onOpen } = props;
  const isOpen = curOpen === id;
  
  function handleOpen(id, curOpen) {
    id !== curOpen ? onOpen(id) : onOpen(0);
  }

  return (
    <div
      className={`item${isOpen ? " open" : ""}`}
      key={id}
      onClick={() => handleOpen(id, curOpen)}
    >
      <p className="number">{id <= 9 ? `0${id}` : id}</p>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && (
        <div className="content-box">
          <p className="text">{children}</p>
        </div>
      )}
    </div>
  );
}
