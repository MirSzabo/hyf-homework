import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import PropTypes from "prop-types";
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

  const toggleEditState = () => editState(prev => !prev);
  
  const editFormShow = () => {
    return (<EditTodoForm
          editTodo={editTodo}
          id={id}
          editState={editState}
          description={description}
          toggleEditState={toggleEditState}
      />)
  }

  const editFormHide = () => {
    return (<div>
      {description} {deadline}
      <input
        type="checkbox"
        name="completed"
        value={completed}
        onChange={() => toggleTodo(id)}
      />
      <button onClick={() => removeTodo(id)}>Delete</button>
      <button onClick={toggleEditState}>Edit</button>
    </div>)
  }

  return (
    <li style={{ textDecoration: completed ? "Line-through" : "none" }}>
      {state ? editFormShow() : editFormHide() }
    </li>
  );
}
TodoItem.propTypes = {
  description: PropTypes.string
};

export default TodoItem;
