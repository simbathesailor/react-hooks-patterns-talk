import React from "react";

// function useRefValues(value) {
//   const ref = React.useRef(value);
//   React.useEffect(() => {
//     ref.current = value;
//   });
//   return [ref];
// }

/** This is equivalent to useCallback */
function useHotRefs(value, dependencies) {
  const fnRef = React.useRef(value);

  const dependenciesFinal = (() => {
    if (Array.isArray(dependencies)) {
      return [...dependencies];
    }
    return [Math.random()];
  })();
  // console.log("TCL: useHotRefs -> dependenciesFinal", dependenciesFinal);

  React.useEffect(() => {
    fnRef.current = value;
  }, [...dependenciesFinal]);

  return [fnRef];
}

function useFunctionHook(fn, countInParent) {
  const [fnRef] = useHotRefs(fn);

  // uwc-debug
  React.useEffect(() => {
    if (fnRef.current) {
      fnRef.current();
    }
  }, [fnRef, countInParent]);
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

/** This is equivalent to useCallback */
// function useHotRefs(value, dependencies) {
//   const fnRef = React.useRef(value);

//   const dependenciesFinal = (() => {
//     if (Array.isArray(dependencies)) {
//       return [...dependencies];
//     }
//     return [Math.random()];
//   })();
//   console.log("TCL: useHotRefs -> dependenciesFinal", dependenciesFinal);

//   React.useEffect(() => {
//     fnRef.current = value;
//   }, [...dependenciesFinal]);

//   return [fnRef];
// }

// function useFunctionHook(fn, countInParent) {
//   const [fnRef] = useHotRefs(fn);

//   // uwc-debug
//   React.useEffect(() => {
//     if (fnRef.current) {
//       fnRef.current();
//     }
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
