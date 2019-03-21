import React, { useState } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      completed: false
    },
    {
      text: "Learn GIT",
      completed: false
    },
    {
      text: "Learn Node.js",
      completed: false
    }
  ]);

  function addTodo(text) {
    const newTodos = [...todos, { text: text }];
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function checkTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = newTodos[index].completed ? false : true;
    setTodos(newTodos);
  }

  function editTodo(index, text) {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To do List</h1>
      <p>Let's plan for today!</p>
      <Todos todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
