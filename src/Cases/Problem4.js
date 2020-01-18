import React from "react";

function useRefValues(value) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return [ref];
}

function useCallbackRef() {
  const [domElem, setDomElem] = React.useState(null);
  function setElem(elem) {
    if (elem) {
      setDomElem(elem);
      setDomElem.current = elem; // This is important , because might be some other component which will be needing
      // access to the elem
    }
  }
  return [domElem, setElem];
}

function useFunctionHook(fn, countInParent) {
  const [fnRef] = useRefValues(fn);
  const [domElem, setElem] = useCallbackRef();

  //   const [domElem, setDomElem] = React.useState(null);

  //   function setElem(elem) {
  //     if (elem) {
  //       setDomElem(elem);
  //       setDomElem.current = elem; // This is important , because might be some other component which will be needing
  //       // access to the elem
  //     }
  //   }

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
  //   const ref = React.useRef(null);

  const [countInParent, setCountInParent] = React.useState(0);

  function fnCallback() {
    console.log("Hi bro");
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
      <button onClick={() => setCountInParent(c => c + 1)}>
        Increment Parent's count
      </button>
    </div>
  );
}

export default App;
