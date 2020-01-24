import React from "react";

function useFunctionHook(fn, countInParent) {
  // uwc-debug
  React.useEffect(() => {
    fn();
  }, [fn, countInParent]);
}

function Problem1() {
  const [countInParent, setCountInParent] = React.useState(0);

  function fn() {
    // some logic
    console.log("fn runs");
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
export default Problem1;

// Problem

// function useFunctionHook(fn, countInParent) {
//   // uwc-debug
//   React.useEffect(() => {
//     fn();
//   }, [fn, countInParent]);
// }

// function Problem1() {
//   const [countInParent, setCountInParent] = React.useState(0);

//   function fn() {
//     // some logic
//     console.log("fn runs");
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
//   // uwc-debug
//   React.useEffect(() => {
//     fn();
//   }, [fn, countInParent]);
// }

// function fn() {
//   // some logic
//   console.log("fn runs");
// }

// function Problem1() {
//   const [countInParent, setCountInParent] = React.useState(0);

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
