import React from "react";

function formatTime(time) {
  return `${new Date(time)}`
    .split(" ")
    .slice(4, 5)
}

function ShiftItem({ name, start, end, hours }) {
  const hourWage = 150;
  const timeStart= formatTime(start);
  const timeEnd = formatTime(end);
  return (
    <div className="overview-items">
      <h3>{name} </h3>
      <p>
        {timeStart} - {timeEnd}
      </p>
      <p>{hours}hours</p>
      <p>{hourWage * hours} kr.</p>
    </div>
  );
}

export default ShiftItem;
