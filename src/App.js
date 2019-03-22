import React, { useState } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";
import GlobalStyle from "./globalStyle";
import { AppWrapper, Heading } from "./style";

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
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Heading>To do list</Heading>
        <p>Let's plan for today!</p>
        <TodoInput addTodo={addTodo} />
        <Todos
          todos={todos}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          editTodo={editTodo}
        />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
