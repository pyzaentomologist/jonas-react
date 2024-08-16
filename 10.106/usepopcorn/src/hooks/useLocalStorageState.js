import { useState, useEffect } from "react";
import {
  getValueFromLocalStorage,
  setValueFromLocalStorage,
} from "../utils/localStorage";
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = getValueFromLocalStorage(key);
    return storedValue ? storedValue : initialState;
  });
  useEffect(() => {
    setValueFromLocalStorage(value, key);
  }, [value, key]);
  return [value, setValue];
}
