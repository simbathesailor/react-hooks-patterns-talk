import React from "react";

function useFunctionHook(fn, countInParent) {
  //   const fnRef = React.useRef(null);

  //   React.useEffect(() => {
  //     fnRef.current = fn;
  //   });
  // const [fnRef] = useRefValues(fn);

  // uwc-debug
  React.useEffect(() => {
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

// Problem

// function useFunctionHook(fn, countInParent) {
//   //   const fnRef = React.useRef(null);

//   //   React.useEffect(() => {
//   //     fnRef.current = fn;
//   //   });
//   // const [fnRef] = useRefValues(fn);

//   // uwc-debug
//   React.useEffect(() => {
//     fn();
//   }, [fn, countInParent]);
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

/// Solution

// function useHotRefs(value) {
//   const fnRef = React.useRef(value);
//   React.useEffect(() => {
//     fnRef.current = value;
//   });
//   return [fnRef];
// }
// /** This is equivalent to useCallback but is better at times*/
// function useFunctionHook(fn, countInParent) {
//   //   const fnRef = React.useRef(null);

//   //   React.useEffect(() => {
//   //     fnRef.current = fn;
//   //   });
//   // const [fnRef] = useRefValues(fn);
//   // const fnRef = React.useRef(fn);
//   // React.useEffect(() => {
//   //   fnRef.current = fn;
//   // });
//   const [fnRef] = useHotRefs(fn);
//   // uwc-debug
//   React.useEffect(() => {
//     fnRef.current();
//   }, [fnRef, countInParent]);
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
