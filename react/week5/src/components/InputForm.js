import React, { useState } from "react";

function InputForm({ addShift }) {
  const [shiftForm, setShiftForm] = useState({
    name: "",
    start: "",
    end: ""
  });

  return (
    <div>
      <h1>Submit shift</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          addShift(shiftForm);
        }}
      >
        <input
          value={shiftForm.name}
          onChange={e => setShiftForm({ ...shiftForm, name: e.target.value })}
          type="text"
        ></input>
        <input
          value={shiftForm.start}
          onChange={e => setShiftForm({ ...shiftForm, start: e.target.value })}
          type="datetime-local"
        ></input>
        <input
          value={shiftForm.end}
          onChange={e => setShiftForm({ ...shiftForm, end: e.target.value })}
          type="datetime-local"
        ></input>
      </form>
      <button onClick={() => addShift(shiftForm)}>Save shift</button>
    </div>
  );
}

export default InputForm;
