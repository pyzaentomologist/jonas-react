import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Context is outside CitiesProvider");

  return context;
}
