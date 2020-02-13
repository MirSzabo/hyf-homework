import React, { useState } from "react";

function EditTodoForm({ id, description, editTodo, editState}) {
  const [value, setValue] = useState(description);
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          editTodo(id, value);
          setValue("");
          editState();
        }}
      >
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          autoFocus
        ></input>
      </form>
    </div>
  );
}

export default EditTodoForm;

