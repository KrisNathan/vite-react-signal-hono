import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import CounterBtn from "../CounterBtn";
import { counter } from "../signals/counter";
import LabelWrapper from "../LabelWrapper";

function Home() {
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
      <h1>Vite + React</h1>
      <div className="card">
        <p>Another counter: {counter.value}</p>
        <LabelWrapper />
        <CounterBtn>
          <LabelWrapper />
        </CounterBtn>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
