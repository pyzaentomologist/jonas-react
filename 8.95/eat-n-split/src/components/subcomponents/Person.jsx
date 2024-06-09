import React from "react";
import { Button } from "./Button";
export function Person(props) {
  const { id, name, image, balance, curPerson, onSelection } = props;
    
  const isSelcted = curPerson.id === id;
  
  function handleBalanceInfo(balance) {
    if (balance > 0) {
      return <p className="red">{`${name} ma u Ciebie dług: ${balance}zł`}</p>;
    } else if (balance < 0) {
      return <p className="green">{`Masz dług u ${name} w wysokości: ${balance * -1}zł`}</p>;
    } else {
      return <p>{`Jesteś rozliczony z ${name}`}</p>;
    }
  }
  console.log(balance);
  return (
    <li className={isSelcted ? "selected" : ""}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {handleBalanceInfo(balance)}
      <Button id={id} onHandleClick={()=>onSelection({ id, name, image, balance })}>
        {isSelcted ? "Zamknij" : "Wybierz"}
      </Button>
    </li>
  );
}