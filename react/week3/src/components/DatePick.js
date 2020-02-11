import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const moment = require("moment");

const DatePick = () => {
  const [deadline, setDeadline] = useState(new Date());
console.log(deadline)
  return <DatePicker selected={deadline} onChange={date =>
    setDeadline(date)} minDate={new Date()}/>
};

export default DatePick;
