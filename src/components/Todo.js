import React from "react";
import { TodoDiv, Button, TodoTitle } from "../style";

const Todo = ({ index, text, completed, removeTodo, checkTodo }) => {
  return (
    <TodoDiv>
      <TodoTitle completed={completed}>{text}</TodoTitle>
      <Button onClick={() => checkTodo(index)}>
        <i className="fas fa-check" />
      </Button>
      <Button onClick={() => removeTodo(index)}>X</Button>
    </TodoDiv>
  );
};

export default Todo;
