import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TestComponent from "./components/TestComponent";

const Comp = () => {
  return <p>This is a comp component</p>
}

function App() {
  const [count, setCount] = useState(2);

  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp />
      <button
        onClick={() => setCount(count + 1)}
      >Click mE!</button>
        <div>{'🐥'.repeat(count)}</div>
      </header>
    </div>
  );
}

export default App;
