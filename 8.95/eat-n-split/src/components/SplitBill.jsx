import React, { useState } from "react";
import { Button } from "./subcomponents/Button";
import { Input } from "./subcomponents/Input";
import { Select } from "./subcomponents/Select";

export function SplitBill(props) {
  const blankBill = {
    value: 0,
    paidByUser: 0,
    whoPaid: "you",
  };
  const [theBill, setTheBill] = useState(blankBill);
  const { curPerson, onCurPerson, onSplitBill } = props;
  
  const balance = theBill ? theBill.value - theBill.paidByUser : 0;
  const balanceAfterPaid =
    (theBill.whoPaid !== "you" ? balance : -1 * Math.abs(balance)) +
    curPerson.balance;


  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill({ ...curPerson, balance: balanceAfterPaid });
    onCurPerson((person) => { return { ...person, balance: balanceAfterPaid }});
  }

  function handleValueBill(e) {
    setTheBill((theBill) => {
      return { ...theBill, value: Number(e.target.value) };
    });
  }
  function handlePaidByUserBill(e) {
    setTheBill((theBill) => {
      return {
        ...theBill,
        paidByUser:
          Number(e.target.value) > theBill.value
            ? theBill.value
            : Number(e.target.value),
      };
    });
  }
  function handleWhoPaidBill(e) {
    setTheBill((theBill) => {
      return { ...theBill, whoPaid: e.target.value };
    });
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Podziel rachunek z {curPerson.name}</h2>
      <Input onChange={handleValueBill} reqired={true}>💰 Wartość rachunku</Input>
      <Input onChange={handlePaidByUserBill}>💸 Twoje wydatki</Input>
      <Input disabled value={balance}>
        💲 Wydatki {curPerson.name}
      </Input>
      <Select
        name={curPerson.name}
        onChange={handleWhoPaidBill}
        value={theBill.whoPaid}
      >
        🖐 Kto zapłacił
      </Select>
      <Button>Podziel rachunek</Button>
    </form>
  );
}
