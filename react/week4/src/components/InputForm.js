import React, { useContext } from "react";
import { userListContext } from "../App";

const InputForm = () => {
  const { input, setInput, setLoading } = useContext(userListContext);
  return (
    <>
      <form>
        <label>
          User name:
          <input
            type="text"
            value={input}
            onChange={event => {
              setInput(event.target.value);
              setLoading(true);
            }}
          />
        </label>
      </form>
    </>
  );
};

export default InputForm;
