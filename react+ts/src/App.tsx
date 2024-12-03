// import Hooks1 from "./components/Hooks1";
import Counter from "./components/Counter";
// import UseReducer from "./components/UseReducer";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

function App() {
  return (
    <>
      <section className="app">
        {/* <Hooks1 /> */}
        {/* <UseReducer /> */}
        <CounterProvider count={initState.count} text={initState.text}>
          <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
        </CounterProvider>
      </section>
    </>
  );
}

export default App;
