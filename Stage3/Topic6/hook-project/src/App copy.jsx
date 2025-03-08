import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";
import { ErrorBoundary } from "./ErrorBoundary";

const initialArg = {
  count: 0,
  number: 0,
  users: null,
  albums: null,
  loading: true,
};

function reducer(state, action) {
  console.log("-----");
  console.log("Render reducer");
  console.log("Reducer state", state);
  console.log("Reducer action", action);
  console.log("-----");

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "incrementBigNumber":
      return { ...state, count: state.count + action.payload };
    case "userFill":
      return { ...state, user: action.payload, loading: false };
    case "albumFill":
      return { ...state, album: action.payload, loading: false };
    case "incrementNumber":
      return { ...state, number: state.number + 1 };
    case "decrementNumber":
      return { ...state, number: state.number - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(0);

  // console.log("-----");
  // console.log("Render App");
  // console.log("App count", count);
  // console.log("App number", number);
  // console.log("-----");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "userFill", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "albumFill", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ErrorBoundary>
        <Child number={state.number} />
      </ErrorBoundary>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "increment" })}>
          count is {state.count}
        </button>

        <button
          onClick={() => dispatch({ type: "incrementBigNumber", payload: 10 })}
        >
          count big is {state.count}
        </button>
        <button onClick={() => dispatch({ type: "incrementNumber" })}>
          number is {state.number}
        </button>

        {/* <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <button onClick={() => setNumber((prev) => prev + 1)}>
          number is {number}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
