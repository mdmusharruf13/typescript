import { ReactNode, useReducer } from "react";

const initialState = { score: 0, name: "" };

const enum REDUCRE_ACTIONS {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCRE_ACTIONS;
  payload?: string;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCRE_ACTIONS.INCREMENT:
      return { ...state, score: state.score + 1 };
    case REDUCRE_ACTIONS.DECREMENT:
      return { ...state, score: state.score - 1 };
    case REDUCRE_ACTIONS.NEW_INPUT:
      return { ...state, name: action.payload ?? "" };
    default:
      throw new Error();
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <section>
        <p>score is: {state.score}</p>
        <button onClick={() => dispatch({ type: REDUCRE_ACTIONS.INCREMENT })}>
          +
        </button>
        <button onClick={() => dispatch({ type: REDUCRE_ACTIONS.DECREMENT })}>
          -
        </button>
      </section>
      <section>
        <input
          type="text"
          onChange={(e) =>
            dispatch({
              type: REDUCRE_ACTIONS.NEW_INPUT,
              payload: e.target.value,
            })
          }
        />
        <p>name : {state.name}</p>
      </section>
    </>
  );
}
