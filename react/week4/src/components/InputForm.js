import React, { useContext } from "react";
import { userListContext } from "../App";

const InputForm = () => {
  const { input, setInput } = useContext(userListContext);
  return (
    <>
      <form>
          <input
            type="text"
            value={input}
            placeholder="User name"
            onChange={event => {
              setInput(event.target.value);
            }}
          />
      </form>
    </>
  );
};

export default InputForm;
