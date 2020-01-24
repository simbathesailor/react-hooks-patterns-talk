import React from "react";
import "./App.css";

/**
 * 1. show use what changed
 */
import Showusewhatchanged from "./Cases/Showusewhatchanged";

/**
 *  2. Fix the 2nd case, where the function are defined inside component body
 */

import Problem1 from "./Cases/Problem1";

/**
 * 3 . useCallback ways to fix the issue.
 *
 */

import Problem2 from "./Cases/Problem2";

/**
 * useRef to the rescue
 */

import Problem3 from "./Cases/Problem3";

/**
 * refCallbackValues
 */

import Problem4 from "./Cases/Problem4";

/**
 * Debounced effect
 */
import Problem6 from "./Cases/Problem6";

// {/* <Problem6 /> */}
function App() {
  return (
    <div className="App">
      <Showusewhatchanged></Showusewhatchanged>
      {/* <Problem1 /> */}
      {/* <Problem2 /> */}
      {/* <Problem3 /> */}
      {/* <Problem4 /> */}
      {/* <Problem6 /> */}
    </div>
  );
}

export default App;
