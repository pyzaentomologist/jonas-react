import React, { useState, useEffect } from "react";
import { Select } from "./components/Select"

export default function App() {
  const [currencies, setCurrencies] = useState("");
  const [output, setOutput] = useState(0);
  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState("");
  const [toCur, setToCur] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.frankfurter.app/latest");
      const data = await res.json();
      setCurrencies(data);
      setFromCur(Object.keys(data.rates)[0]);
      setToCur(Object.keys(data.rates)[0]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      setOutput(data);
      setIsLoading(false);
    }
    if (fromCur === toCur) {
      setOutput({ rates: { [toCur]: amount } })
    } else if (toCur && amount === 0) {
      setOutput({ rates: { [toCur]: amount } });
    } else {
      fetchData();
    }
  }, [amount, fromCur, toCur, setOutput]);

  function handleAmount(e) {
    setAmount(e.target.value);
  }
  function handleFromCur(e) {
    setFromCur(e.target.value);
  }
  function handleToCur(e) {
    setToCur(e.target.value);
  }
  
  return (
    <div>
      <input
        type="number"
        min="0"
        onChange={handleAmount}
        value={amount}
        disabled={isLoading}
      />
      {currencies && (
        <>
          <Select
            currencies={currencies}
            onSelect={handleFromCur}
            isLoading={isLoading}
          />
          <Select
            currencies={currencies}
            onSelect={handleToCur}
            isLoading={isLoading}
          />
        </>
      )}
      <p>{output ? output.rates[toCur] : "0"}</p>
    </div>
  );
}
