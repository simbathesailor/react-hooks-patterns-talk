import React from "react";
import logo from "./logo.svg";

function Showusewhatchanged() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  // uwc-debug
  React.useEffect(() => {}, [value1, value2]);

  // uwc-debug
  const value = React.useMemo(() => {
    return value1 + value2;
  }, [value1, value2]);

  // uwc-debug
  const callback = React.useCallback(() => {}, [value1]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            setValue1(value1 + 1);
          }}
          style={{
            color: "#fff",
            fontSize: "28px"
          }}
        >
          Change Value 1
        </button>
        <button
          onClick={() => {
            setValue2(value2 + 1);
          }}
          style={{
            color: "#fff",
            fontSize: "28px"
          }}
        >
          Change Value 2
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Showusewhatchanged;
