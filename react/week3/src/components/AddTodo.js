import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");
  const [date, setDate] = useState("");

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
            onChange={event => setValue(event.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          Deadline
          <DatePicker
            selected={date}
            minDate={new Date()}
            onChange={event => {
              setDate(event);
              setDeadline(event.toLocaleDateString());
            }}
          />
        </div>
      </form>
      <button onClick={() => addTodo(value, deadline)}>Add todo</button>
    </div>
  );
}

export default AddTodo;
