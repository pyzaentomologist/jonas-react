"use client"
import { createContext, useContext, useState } from "react"

const ReservationContext = createContext();

const initialState = { from: null, to: null };

export function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  function resetRange() {
    setRange({ from: null, to: null });
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined) throw new Error("Context jest użyty poza providerem")
  
  return context;
}