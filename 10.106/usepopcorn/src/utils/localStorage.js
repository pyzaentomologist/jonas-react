export function getValueFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
}
export function setValueFromLocalStorage(value, key) {
    localStorage.setItem(key, JSON.stringify(value));
}
