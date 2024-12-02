import { ReactNode } from "react";

type CounterProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export default function Counter({ children, setCounter }: CounterProps) {
  return (
    <>
      <h2>{children}</h2>
      <button onClick={() => setCounter((perv) => perv + 1)}>+</button>
      <button onClick={() => setCounter((perv) => perv - 1)}>-</button>
    </>
  );
}
