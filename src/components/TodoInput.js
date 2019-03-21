import React, { useState } from "react";
import { Input } from "../style";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  function handleChange(text) {
    setText(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={({ target }) => handleChange(target.value)}
        placeholder="ex: do homework"
      />
    </form>
  );
};

export default TodoInput;
