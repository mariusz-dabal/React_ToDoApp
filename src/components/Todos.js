import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, removeTodo, checkTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          text={todo.text}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default Todos;
