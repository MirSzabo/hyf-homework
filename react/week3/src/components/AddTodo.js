import React, { useState } from "react";
import DatePick from "./DatePick";

function AddTodo({addTodo}) {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");
  
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(value, deadline);
          setValue("");
        }}
      >
        <div>
          Todo description
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          Deadline
          <DatePick />
        </div>
      </form>
      <button onClick={() => addTodo(value, deadline)}>Add todo</button>
    </div>
  );
}

export default AddTodo;
