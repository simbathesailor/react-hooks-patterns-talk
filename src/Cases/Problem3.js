import React from "react";

function useRefValues(value) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return [ref];
}

function useFunctionHook(fn, countInParent) {
  const [count, setCount] = React.useState(0);

  //   const fnRef = React.useRef(null);

  //   React.useEffect(() => {
  //     fnRef.current = fn;
  //   });
  const [fnRef] = useRefValues(fn);

  // uwc-debug
  React.useEffect(() => {
    fnRef.current();
  }, [count, setCount, fnRef, countInParent]);

  return [setCount, fnRef.current];
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
