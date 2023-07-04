import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTasks = () => {
    setList([...list, { id: uuidv4(), todo: input.trim() }]);
    setInput("");
  };

  const deleteTask = (id) => {
    console.log(id);
    setList(list.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-do App!</h1>
      <br />
      <div className="field">
        <h4>Add New To-Do</h4>
        <br />

        <div className="group">
          <input
            type="text"
            placeholder="Enter new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button name="add" onClick={addTasks} disabled={input ? false : true}>
            + Add Task
          </button>
        </div>
        <div className="list">
          <List list={list} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
