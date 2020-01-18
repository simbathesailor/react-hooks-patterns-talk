import React from "react";
function useRefValues(value) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return [ref];
}

// function useCallbackValues(callback, dependencies) {
//   if (!dependencies) return React.useCallback(callback);

//   return React.useCallback(callback, [...dependencies]);
// }

function useAcceptOptions(option, arr, countInParent) {
  const { a, b, c, ...otherValues } = option;

  const { callback1, array1 } = otherValues;

  // usecallback takes second argument which make it more usable in most of the cases. The cases where we want
  // callbacks to change, but not every time. There is no such thing with useRef. Ofcourse we can simulate
  // that with the the help of some other hooks. But too much work

  const finalCallback = React.useCallback(callback1, [a, b]);
  const [refArr] = useRefValues(arr);

  // Here refArr is silent dependency
  // uwc-debug
  React.useEffect(() => {
    console.log("some logic based on final callback");
  }, [a, b, c, finalCallback, refArr]);

  // uwc-debug
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
