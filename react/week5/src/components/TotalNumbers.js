import React from "react";

function TotalNumbers({ shiftsToShow }) {
  const hourWage = 150;
  const totalTime = shiftsToShow.reduce((total, shift) => {
    return total + shift.hours;
  }, 0);
  const totalPrice = hourWage * totalTime;
  return (
    <div className="overview-items">
      <p>Total logged time: {totalTime}</p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}

export default TotalNumbers;
