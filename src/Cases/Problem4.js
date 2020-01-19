import React from "react";

function useHotRefs(value, dependencies) {
  const fnRef = React.useRef(value);

  const dependenciesFinal = (() => {
    if (Array.isArray(dependencies)) {
      return [...dependencies];
    }
    return [Math.random()];
  })();

  React.useEffect(() => {
    fnRef.current = value;
  }, [...dependenciesFinal]);

  return [fnRef];
}

function useCallbackRef() {
  const [domElem, setDomElem] = React.useState(null);
  function setElem(elem) {
    if (elem) {
      setDomElem(elem);
      setDomElem.current = elem;
      // This is important , because might be some other component which will be needing
      // access to the elem
    }
  }
  return [domElem, setElem];
}
function useFunctionHook(fn, countInParent, ref) {
  const [fnRef] = useHotRefs(fn);

  const [domElem, setElem] = useCallbackRef();

  //   const [domElem, setDomElem] = React.useState(null);

  //   function setElem(elem) {
  //     if (elem) {
  //       setDomElem(elem);
  //       setDomElem.current = elem; // This is important , because might be some other component which will be needing
  //       // access to the elem
  //     }
  //   }

  // uwc-debug
  React.useEffect(() => {
    // some trivial update happening to
    if (domElem) {
      if (countInParent % 2 === 0) {
        domElem.style.backgroundColor = "green";
      } else {
        domElem.style.backgroundColor = "hotpink";
      }

      fnRef.current();
    }
  }, [countInParent, fnRef, domElem]);

  return [setElem];
}

function App() {
  // const ref = React.useRef(null);

  const [countInParent, setCountInParent] = React.useState(0);

  function fnCallback() {
    console.log("fnCallback ran");
  }

  const [setElem] = useFunctionHook(fnCallback, countInParent);

  return (
    <div
      ref={setElem}
      style={{
        height: " 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px"
      }}
    >
      {countInParent}
      <button
        onClick={() => setCountInParent(c => c + 1)}
        style={{ fontSize: "28px", fontWeight: "bold" }}
      >
        Increment Parent's count
      </button>
    </div>
  );
}

export default App;

// Problem

// function useHotRefs(value, dependencies) {
//   const fnRef = React.useRef(value);

//   const dependenciesFinal = (() => {
//     if (Array.isArray(dependencies)) {
//       return [...dependencies];
//     }
//     return [Math.random()];
//   })();

//   React.useEffect(() => {
//     fnRef.current = value;
//   }, [...dependenciesFinal]);

//   return [fnRef];
// }

// function useFunctionHook(fn, countInParent, ref) {
//   const [fnRef] = useHotRefs(fn);
//   // const [domElem, setElem] = useCallbackRef();

//   //   const [domElem, setDomElem] = React.useState(null);

//   //   function setElem(elem) {
//   //     if (elem) {
//   //       setDomElem(elem);
//   //       setDomElem.current = elem; // This is important , because might be some other component which will be needing
//   //       // access to the elem
//   //     }
//   //   }

//   // uwc-debug
//   React.useEffect(() => {
//     // some trivial update happening to
//     if (ref.current) {
//       if (countInParent % 2 === 0) {
//         ref.current.style.backgroundColor = "green";
//       } else {
//         ref.current.style.backgroundColor = "hotpink";
//       }

//       fnRef.current();
//     }
//   }, [countInParent, fnRef, ref]);

//   // return [setElem];
// }

// function App() {
//   const ref = React.useRef(null);

//   const [countInParent, setCountInParent] = React.useState(0);

//   function fnCallback() {
//     console.log("fnCallback ran");
//   }

//   useFunctionHook(fnCallback, countInParent, ref);

//   return (
//     <div
//       ref={ref}
//       style={{
//         height: " 100px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "24px"
//       }}
//     >
//       {countInParent}
//       <button
//         onClick={() => setCountInParent(c => c + 1)}
//         style={{ fontSize: "28px", fontWeight: "bold" }}
//       >
//         Increment Parent's count
//       </button>
//     </div>
//   );
// }

// Solution
// function useHotRefs(value, dependencies) {
//   const fnRef = React.useRef(value);

//   const dependenciesFinal = (() => {
//     if (Array.isArray(dependencies)) {
//       return [...dependencies];
//     }
//     return [Math.random()];
//   })();

//   React.useEffect(() => {
//     fnRef.current = value;
//   }, [...dependenciesFinal]);

//   return [fnRef];
// }

// function useCallbackRef() {
//   const [domElem, setDomElem] = React.useState(null);
//   function setElem(elem) {
//     if (elem) {
//       setDomElem(elem);
//       setDomElem.current = elem;
//       // This is important , because might be some other component which will be needing
//       // access to the elem
//     }
//   }
//   return [domElem, setElem];
// }
// function useFunctionHook(fn, countInParent, ref) {
//   const [fnRef] = useHotRefs(fn);

//   const [domElem, setElem] = useCallbackRef();

//   //   const [domElem, setDomElem] = React.useState(null);

//   //   function setElem(elem) {
//   //     if (elem) {
//   //       setDomElem(elem);
//   //       setDomElem.current = elem; // This is important , because might be some other component which will be needing
//   //       // access to the elem
//   //     }
//   //   }

//   // uwc-debug
//   React.useEffect(() => {
//     // some trivial update happening to
//     if (domElem) {
//       if (countInParent % 2 === 0) {
//         domElem.style.backgroundColor = "green";
//       } else {
//         domElem.style.backgroundColor = "hotpink";
//       }

//       fnRef.current();
//     }
//   }, [countInParent, fnRef, domElem]);

//   return [setElem];
// }

// function App() {
//   // const ref = React.useRef(null);

//   const [countInParent, setCountInParent] = React.useState(0);

//   function fnCallback() {
//     console.log("fnCallback ran");
//   }

//   const [setElem] = useFunctionHook(fnCallback, countInParent);

//   return (
//     <div
//       ref={setElem}
//       style={{
//         height: " 100px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "24px"
//       }}
//     >
//       {countInParent}
//       <button
//         onClick={() => setCountInParent(c => c + 1)}
//         style={{ fontSize: "28px", fontWeight: "bold" }}
//       >
//         Increment Parent's count
//       </button>
//     </div>
//   );
// }
