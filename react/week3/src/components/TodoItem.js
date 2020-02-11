import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import PropTypes from 'prop-types';

function TodoItem({
  id,
  description,
  deadline,
  completed,
  removeTodo,
  editTodo,
  toggleTodo
}) {
  const [state, editState] = useState(false);
  return (
    <li style={{ textDecoration: completed ? "Line-through" : "none" }}>
      {state ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          description={description}
          editState={editState}
        />
      ) : (
        <div>
          {description} {deadline}
          <input
            type="checkbox"
            name="completed"
            value={completed}
            onChange={() => toggleTodo(id)}
          />
          <button onClick={() => removeTodo(id)}>Delete</button>
          <button onClick={editState}>Edit</button>
        </div>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  description: PropTypes.string
}

export default TodoItem;
