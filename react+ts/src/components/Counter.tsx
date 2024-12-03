import { ReactNode } from "react";
import { useCounter, useCounterText } from "../context/CounterContext";

type CounterProps = {
  children: (num: number) => ReactNode;
};

export default function Counter({ children }: CounterProps) {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();
  return (
    <>
      <h2>{children(count)}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  );
}
