import React from "react";

function TodoItem({ id, description, completed, removeTodo, toggleTodo }) {

  return (
    <li style={{textDecoration: completed ? "Line-through" : "none"}}>
      {description} 
      <input
        type="checkbox"
        name="completed"
        value ={completed}
        onChange={() => toggleTodo(id)}
      />
      <button onClick={() => removeTodo(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
