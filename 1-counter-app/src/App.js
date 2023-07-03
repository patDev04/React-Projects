import React, { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCounter] = useState(0);
  const [addBy, setAddBy] = useState("");

  const reset = () => {
    setCounter(0);
    setAddBy("");
  };

  const addByInputValue = () => {
    setCounter(count + Number(addBy));
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div cla className="counter">
        <div className={count > 0 ? "count active" : "count inactive"}>
          {count}
        </div>
        <div className="button-field">
          <button onClick={() => setCounter(count - 1)}>-</button>
          <button onClick={reset}>C</button>{" "}
          <button onClick={() => setCounter(count + 1)}>+</button>
        </div>

        <div className="add-con">
          <input
            type="number"
            value={addBy}
            placeholder="1,2,3"
            onChange={(e) => setAddBy(e.target.value)}
          />
          <button className="addby-btn" onClick={addByInputValue}>
            Add by
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
