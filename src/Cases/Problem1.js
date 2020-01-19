import React from "react";

function useFunctionHook(fn) {
  const [count, setCount] = React.useState(0);

  // uwc-debug
  React.useEffect(() => {}, [count, setCount, fn]);
}

function Problem1() {
  const [countInParent, setCountInParent] = React.useState(0);

  function fn() {
    // some logic
  }
  useFunctionHook(fn);

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

// function useFunctionHook(fn) {
//   const [count, setCount] = React.useState(0);

//   // uwc-debug
//   React.useEffect(() => {}, [count, setCount, fn]);
// }

// function Problem1() {
//   const [countInParent, setCountInParent] = React.useState(0);

//   function fn() {
//     // some logic
//   }
//   useFunctionHook(fn);

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

// function useFunctionHook(fn) {
//   const [count, setCount] = React.useState(0);

//   // uwc-debug
//   React.useEffect(() => {}, [count, setCount, fn]);
// }

// function fn() {
//   // some logic
// }
// function Problem1() {
//   const [countInParent, setCountInParent] = React.useState(0);

//   useFunctionHook(fn);

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
