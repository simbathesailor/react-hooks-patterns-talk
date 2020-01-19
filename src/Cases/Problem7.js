import React from "react";
import debounce from "lodash/debounce";

function makeApiCallRaw(value, setCount) {
  console.log("make api call with value", value);
  setCount(c => c + 1);
}

const debouncedmakeApiCall = debounce(makeApiCallRaw, 200, { trailing: true });

function ChildComponent({ value, setValue }) {
  const [count, setCount] = React.useState(0);

  return (
    <input
      style={{
        height: "100px",
        border: "3px solid",
        width: "400px",
        fontSize: "48px",
        marginTop: "50px"
      }}
      defaultValue={value}
      value={value}
      onChange={e => {
        setValue(e.target.value); // Has to be non debounced
        debouncedmakeApiCall(e.target.value, setCount); // has to be debounced
      }}
    />
  );
}

function App() {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <ChildComponent value={value} setValue={setValue} />
    </div>
  );
}

export default App;
