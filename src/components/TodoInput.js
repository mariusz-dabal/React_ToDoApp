import React, { useState } from "react";

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
      <input
        type="text"
        value={text}
        onChange={({ target }) => handleChange(target.value)}
      />
    </form>
  );
};

export default TodoInput;
