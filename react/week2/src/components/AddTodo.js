import React from "react";
import useInputState from "../hooks/useInputState";

function AddTodo({addTodo}) {
  const [value, handleChange, reset] = useInputState("");
  
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <input value={value} onChange={handleChange} type="text"></input>
      </form>
      <button onClick={() => addTodo(value)}>Add todo</button>
    </div>
  );
}

export default AddTodo;
