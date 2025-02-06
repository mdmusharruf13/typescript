import { CounterContext } from "@/app/context/CounterContext";
import { MyContext } from "@/app/context/MyContext";
import { useContext } from "react";

function MyComponent() {
  const context = useContext(MyContext);
  const { count, increment, decrement } = useContext(CounterContext);

  if (!context) {
    throw new Error("MyComponent must be used within a MyContextProvider");
  }
  const { value, setValue } = context;
  return (
    <section>
      <section>
        <p>Value: {value}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </section>
      <section>
        <p>{count}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </section>
    </section>
  );
}

export default MyComponent;
