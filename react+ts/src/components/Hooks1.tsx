import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

export default function Hooks1() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => console.log("unmounting");
  }, [users]);

  // its memoizes function so that it is not recreated
  const addTwo = useCallback(
    (
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 1);
    },
    []
  );

  const myNum: number = 10;
  // memoizes the last calculated value
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      <section className="app">
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(prev => prev+1)}>Add</button> */}
        {/* every time the render the above anonymous function is created */}

        <button onClick={addTwo}>Add</button>
        <h2>{result}</h2>
        <input type="text" ref={inputRef} />
      </section>
    </>
  );
}
