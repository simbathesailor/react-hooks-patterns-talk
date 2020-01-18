import React from "react";

function useFunctionHook(fn, countInParent) {
  // now the fnCallback will only not change across rerender
  const fnCallback = React.useCallback(fn, [countInParent]);
  const [count, setCount] = React.useState(0);
  //uwc-debug
  React.useEffect(() => {
    // some logic
    // if fnCallback changes the hooks callback will run
    fnCallback();
  }, [count, setCount, fnCallback, countInParent]);
  return [setCount, fnCallback];
}

function App() {
  const [countInParent, setCountInParent] = React.useState(0);

  function fn() {
    // some logic
    console.log("countInParent", countInParent);
  }

  const [setCount] = useFunctionHook(fn, countInParent);

  return (
    <div>
      <button
        style={{ marginTop: "50px" }}
        onClick={() => setCountInParent(countInParent + 1)}
      >
        <h1>{countInParent}</h1>
        Change Count
      </button>
    </div>
  );
}

export default App;
