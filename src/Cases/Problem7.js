import React from "react";
// uwc-debug-below
function useHotRefs(value) {
  const fnRef = React.useRef(value);
  React.useEffect(() => {
    fnRef.current = value;
  });

  return [fnRef];
}

function useAcceptOptions(option, arr, countInParent) {
  const { a, b, c, ...otherValues } = option;

  const { callback1, array1 } = otherValues;

  const finalCallback = React.useCallback(callback1, [a, b]);

  const [refArr] = useHotRefs(arr);

  // Here refArr is silent dependency

  React.useEffect(() => {
    console.log("some logic based on final callback");
  }, [a, b, c, finalCallback, refArr]);

  React.useEffect(
    () => {
      console.log("countInParent", countInParent);
    },
    [countInParent]
    // sxassd
  );
}

function App() {
  // const [ref, setRef] = React.useRef(null) remove this
  const [countInParent, setCountInParent] = React.useState(0);
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    callback1: aCallback
  };
  function aCallback() {
    console.log("hello a callback", obj.a, obj.b);
  }

  const arr = ["x", "y", "z"];

  useAcceptOptions(obj, arr, countInParent);

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
