import { FC, ReactNode, useState } from "react";
import { createContext } from "react";

interface CounterShape {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterShape>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
