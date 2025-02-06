import { MyContext } from "@/app/context/MyContext";
import { useContext } from "react";

function MyComponent() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("MyComponent must be used within a MyContextProvider");
  }
  const { value, setValue } = context;
  return (
    <section>
      <p>Value: {value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </section>
  );
}

export default MyComponent;
