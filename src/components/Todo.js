import React from "react";
import { TodoDiv, Button, TodoTitle } from "../style";

const Todo = ({ index, text, completed, removeTodo, checkTodo }) => {
  return (
    <TodoDiv>
      <TodoTitle style={{ textDecoration: completed ? "line-through" : "" }}>
        {text}
      </TodoTitle>
      <Button onClick={() => removeTodo(index)}>X</Button>
      <Button onClick={() => checkTodo(index)}>&middot;</Button>
    </TodoDiv>
  );
};

export default Todo;
