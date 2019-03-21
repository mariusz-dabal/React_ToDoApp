import React from "react";

const Todo = ({ index, text, completed, removeTodo, checkTodo }) => {
  return (
    <div>
      <span style={{ textDecoration: completed ? "line-through" : "" }}>
        {text}
      </span>
      <button onClick={() => removeTodo(index)}>X</button>
      <button onClick={() => checkTodo(index)}>&middot;</button>
    </div>
  );
};

export default Todo;
