import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  //will interact with this array through back and transition acitons

  // function that allows us to transition to a newMode
  const transition = function(newMode, replace = false) {
    if (!replace) {
      setHistory(() => [...history,newMode]);
      // another way to write this line
      // setHistory((prev) => [...prev, newMode]);
    }
    setMode(() => newMode)
  };

  // function that allows user to go back to the previous history but not their first one
  //This means that our history array will always need to have a length that is greater than or equal to 1
  const back = function() {
    if (history[history.length-1] !== initial) {
      history.pop();
      setMode(() => history[history.length-1]);
    }
  };
  return {mode, transition, back}
}