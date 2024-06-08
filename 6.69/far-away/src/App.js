import React, {useState} from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import { initialItems } from "./data/initialItems";

export default function App() {  
  const [items, setItems] = useState(initialItems);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClear() {
    const confirmed = window.confirm("Czy jesteś pewny, że chcesz wyczyścić listę?");

    confirmed && setItems([]);
  }

  function changePacked(id) {
    setItems((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  }

  return (
    <>
      <Logo />
      <Form handleNewItem={handleNewItem} />
      <PackingList
        newItems={items}
        handleDelete={handleDelete}
        changePacked={changePacked}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </>
  );
}
