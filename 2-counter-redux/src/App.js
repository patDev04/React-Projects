import "./App.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./redux/counterSlice";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const valueType = Number(inputValue || 0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(reset());
    setInputValue(0);
  };

  return (
    <div className="App">
      <h1>Counter with Redux</h1>
      <div className="counter">
        <div className="field">
          <button className="btn" onClick={() => dispatch(decrement())}>
            -
          </button>

          <div className="count-box">
            <div className="count">{count} </div>
            <button className="reset-btn" onClick={resetAll}>
              C
            </button>

            <div className="add-con">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="addby-btn"
                onClick={() => dispatch(incrementByAmount(valueType))}
              >
                Add by
              </button>
            </div>
          </div>

          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
