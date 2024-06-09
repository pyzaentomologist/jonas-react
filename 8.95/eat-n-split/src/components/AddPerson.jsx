import React, { useState } from "react";
import { Button } from "./subcomponents/Button";
import { Input } from "./subcomponents/Input";

export function AddPerson(props) {
  const { onSetPersonToList, blankPerson } = props;
  const [newPerson, setNewPerson] = useState(blankPerson);

  function handleSubmit(e) {
    e.preventDefault();
    onSetPersonToList(newPerson);
  }
  function onSetNameProperty(e) {
    setNewPerson((newPerson) => {
      return {
        ...newPerson,
        id: Math.floor(Math.random() * 1000000),
        name: e.target.value,
        image: `${blankPerson.image}${newPerson.id}`,
      };
    });
  }
  function onSetImageProperty(e) {
    setNewPerson((newPerson) => {
      return {
        ...newPerson,
        image: e.target.value,
      };
    });
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <Input onChange={onSetNameProperty} value={newPerson.name} required>
        👫 Nazwa Przyjaciela
      </Input>
      <Input onChange={onSetImageProperty} value={newPerson.image} required>
        ⛰ URL Obrazu
      </Input>
      <Button>Dodaj</Button>
    </form>
  );
}