import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)

  const sumar = (value) => {
    setCounter( counter + value);
  }
  const restar = (value) => {
    if (counter <= 1) return;
    setCounter( counter - value);
  }
  const reset = () => {
    setCounter(10)
  }

  return {
    counter,
    sumar,
    restar,
    reset
  };
}