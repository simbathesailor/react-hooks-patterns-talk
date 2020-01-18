const option = { a: 1, b: 2, c: 3 };

// Type 1
// function useAcceptOptions(option) {
//   const { a, b, c } = option;
//   React.useEffect(() => {
//     // also ok, but splices the ability to debug the things , can be anything as the option keys, lets say its a function
//     // will screw everything, it was the case in earlier example also but atleast we knew what is coming in option and what to
//     // consider for the effect
//   }, [...option]);
// }

// Type 2
// function useAcceptOptions(option) {
//   const { a, b, c } = option;
//   React.useEffect(() => {
//     // all good
//   }, [a, b, c]);
// }
