import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Heading title={"new project"} />
      <Section title={"differnet title"}>This is my section</Section>
      <Counter setCounter={setCounter}>Count is {counter}</Counter>
      <List
        items={["javascript", "reactjs", "nodejs"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
