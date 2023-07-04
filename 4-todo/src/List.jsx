import React from "react";

const List = ({ list, deleteTask }) => {
  return (
    <ul>
      {list &&
        list?.map((tasks) => {
          const { id, todo } = tasks;
          return (
            <li key={id}>
              {todo}
              <button name="delete" onClick={() => deleteTask(id)}>
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default List;
