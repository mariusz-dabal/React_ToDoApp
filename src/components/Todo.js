import React, { useState } from "react";
import { TodoDiv, Button, TodoTitle, FormEdit, InputEdit } from "../style";

const Todo = ({ index, text, completed, removeTodo, checkTodo, editTodo }) => {
  const [newText, setNewText] = useState("");
  const [isShownForm, setShowform] = useState(false);

  function handleClickEdit(index) {
    setShowform(isShownForm ? false : true);
    if (!newText) return;
    editTodo(index, newText);
    setNewText("");
  }

  function handleChange(newText) {
    setNewText(newText);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleClickEdit(index);
  }

  return (
    <TodoDiv>
      <TodoTitle completed={completed} edit={isShownForm}>
        {text}
      </TodoTitle>
      <FormEdit edit={isShownForm} onSubmit={e => handleSubmit(e)}>
        <InputEdit
          type="text"
          value={newText}
          onChange={({ target }) => handleChange(target.value)}
          placeholder={text}
          id={"InputEdit" + index}
        />
      </FormEdit>
      <Button onClick={() => checkTodo(index)}>
        <i className="fas fa-check" />
      </Button>
      <Button onClick={() => handleClickEdit(index)}>
        <label htmlFor={"InputEdit" + index}>
          <i className="fas fa-pencil-alt" />
        </label>
      </Button>
      <Button onClick={() => removeTodo(index)}>
        <i className="fas fa-times" />
      </Button>
    </TodoDiv>
  );
};

export default Todo;
