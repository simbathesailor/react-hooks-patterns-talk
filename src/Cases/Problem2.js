import React from "react";

function useFunctionHook(fn, countInParent) {
  //uwc-debug
  React.useEffect(() => {
    // some logic
    fn();
  }, [fn, countInParent]);
}

function App() {
  const [countInParent, setCountInParent] = React.useState(0);

  function fn() {
    // some logic
    console.log("countInParent", countInParent);
  }

  useFunctionHook(fn, countInParent);

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

// Think of showing diagram here if possible.
//Problem

// function useFunctionHook(fn, countInParent) {
//   const [count, setCount] = React.useState(0);

//   //uwc-debug
//   React.useEffect(() => {
//     // some logic
//     fn();
//   }, [count, setCount, fn, countInParent]);
// }

// function App() {
//   const [countInParent, setCountInParent] = React.useState(0);

//   function fn() {
//     // some logic
//     console.log("countInParent", countInParent);
//   }

//   useFunctionHook(fn, countInParent);

//   return (
//     <div>
//       <button
//         style={{ marginTop: "50px" }}
//         onClick={() => setCountInParent(countInParent + 1)}
//       >
//         <h1>{countInParent}</h1>
//         Change Count
//       </button>
//     </div>
//   );
// }

// Solution

// function useFunctionHook(fn, countInParent) {
//   const fnCallback = React.useCallback(fn, [countInParent]);
//   //uwc-debug
//   React.useEffect(() => {
//     // some logic
//     fnCallback();
//   }, [fnCallback, countInParent]);
// }

// function App() {
//   const [countInParent, setCountInParent] = React.useState(0);

//   function fn() {
//     // some logic
//     console.log("countInParent", countInParent);
//   }

//   useFunctionHook(fn, countInParent);

//   return (
//     <div>
//       <button
//         style={{ marginTop: "50px" }}
//         onClick={() => setCountInParent(countInParent + 1)}
//       >
//         <h1>{countInParent}</h1>
//         Change Count
//       </button>
//     </div>
//   );
// }
