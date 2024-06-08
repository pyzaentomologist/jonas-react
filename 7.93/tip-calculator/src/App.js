import React, { useState } from 'react';
import './App.css';
import { Bill } from './components/Bill';
import { Select } from './components/Select'
import { Output } from './components/Output';
import { Reset } from './components/Reset';

function App() {
  const [theBill, setTheBill] = useState(0)
  const [yourTip, setYourTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0);

  const outputProps = {
    theBill,
    yourTip,
    friendTip,
  };

  function handleReset() {
    setTheBill(0);
    setYourTip(0);
    setFriendTip(0);
  }
  return (
    <div className="App">
      <Bill theBill={theBill} onSetTheBill={setTheBill}>
        Rachunek
      </Bill>
      <Select tip={yourTip} onSetTip={setYourTip}>
        Twój tip
      </Select>
      <Select tip={friendTip} onSetTip={setFriendTip}>
        Tip przyjaciela
      </Select>
      {theBill > 0 && <>
        <Output {...outputProps} />
        <Reset onReset={handleReset} />
      </>}
    </div>
  );
}

export default App;
