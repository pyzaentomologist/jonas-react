import React, {useState} from 'react';
import { PersonList } from './components/PersonList';
import { Button } from './components/subcomponents/Button';
import { data } from './data/data'
import {AddPerson} from './components/AddPerson'
import { SplitBill } from './components/SplitBill';

function App() {
  const blankPerson = {
    id: null,
    name: "",
    image: "https://i.pravatar.cc/48?u=",
    balance: 0,
  };
  const [isPersonFormOpen, setIsPersonFormOpen] = useState(false);
  const [persons, setPersons] = useState(data);
  const [curPerson, setCurPerson] = useState(blankPerson);
  function handleShowAddPersonForm() {
    setIsPersonFormOpen((show) => !show);
    setCurPerson(() => blankPerson);
  }

  function handleAddPerson(newPerson) {
    setPersons((persons) => [...persons, newPerson]);
    handleShowAddPersonForm(false);
  }
  
  function handleSelection(person) {
    setCurPerson((cur) => (cur.id === person.id ? blankPerson : person));
    setIsPersonFormOpen(false);
  }

  function handleSplitBill(curPerson) {
    setPersons((persons) => {
      return persons.map((person) =>
        person.id === curPerson.id ? { ...curPerson } : person
      );
    })
    setCurPerson(blankPerson);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <PersonList
          data={persons}
          onSelection={handleSelection}
          curPerson={curPerson}
          blankPerson={blankPerson}
        />
        {isPersonFormOpen && (
          <AddPerson
            onSetPersonToList={handleAddPerson}
            blankPerson={blankPerson}
          />
        )}
        <Button onHandleClick={handleShowAddPersonForm}>
          {isPersonFormOpen ? "Zamknij" : "Dodaj przyjaciela"}
        </Button>
      </div>
      {curPerson.id && (
        <SplitBill
          curPerson={curPerson}
          onCurPerson={setCurPerson}
          onSplitBill={handleSplitBill}
          key={curPerson.id}
        />
      )}
    </div>
  );
}

export default App;
