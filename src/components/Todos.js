import React from "react";
import Todo from "./Todo";
import { TodosDiv } from "../style";

const Todos = ({ todos, removeTodo, checkTodo, editTodo }) => {
  return (
    <TodosDiv>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          text={todo.text}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          editTodo={editTodo}
          completed={todo.completed}
        />
      ))}
    </TodosDiv>
  );
};

export default Todos;
